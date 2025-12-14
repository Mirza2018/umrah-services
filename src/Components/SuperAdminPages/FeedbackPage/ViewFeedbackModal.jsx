/* eslint-disable react/prop-types */
import { Button, Modal, Rate } from "antd";
import { Person } from "../../../../public/images/AllImages";
import dayjs from "dayjs";
import { getImageUrl } from "../../../redux/getBaseUrl";

const ViewFeedbackModal = ({
  isCompanyViewModalVisible,
  handleCancel,
  currentCompanyRecord,
  handleCompanyBlock,
}) => {
  // Use the unique ID (or fallback to timestamp) as key to force remount
  const modalKey =
    currentCompanyRecord?._id || currentCompanyRecord?.id || Date.now();

  return (
    <Modal
      key={modalKey} // ← THIS IS THE KEY FIX: Forces remount when record changes
      title={
        <div className="pt-7 text-center">
          <h2 className="text-base font-normal mb-5">Customer Feedback</h2>
          <p className="w-full bg-[#FF9815] h-0.5"></p>
        </div>
      }
      open={isCompanyViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      width={500}
      className="feedback-view-modal"
    >
      {currentCompanyRecord ? (
        <div className="px-5 pb-5">
          <div className="mt-2 text-lg">
            <div className="flex justify-between border-b-2 border-[#FF9815] pb-3">
              <div className="text-[#535763]">User Name:</div>
              <div className="font-medium">
                {currentCompanyRecord?.reviewer?.fullName || "N/A"}
              </div>
            </div>

            <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
              <div className="text-[#535763]">E-mail:</div>
              <div className="font-medium break-all">
                {currentCompanyRecord?.reviewer?.email || "N/A"}
              </div>
            </div>

            <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
              <div className="text-[#535763]">Date:</div>
              <div className="font-medium">
                {dayjs(currentCompanyRecord?.createdAt).format("DD-MM-YYYY")}
              </div>
            </div>

            <div className="flex justify-between border-b-2 border-[#FF9815] py-3">
              <div className="text-[#535763]">Rating:</div>
              <div>
                <Rate
                  disabled
                  allowHalf
                  value={currentCompanyRecord?.rating || 0}
                  style={{ color: "#FADB14" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-left font-medium text-[#535763] mb-2">
              Review:
            </h3>
            <p className="text-left text-gray-800 leading-relaxed">
              {currentCompanyRecord?.text || "No review text provided."}
            </p>
          </div>

          {currentCompanyRecord?.image &&
            currentCompanyRecord.image.length > 0 && (
              <div className="mt-6">
                <h3 className="text-left font-medium text-[#535763] mb-3">
                  Attached Images:
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {currentCompanyRecord.image.map((pic, index) => (
                    <img
                      key={index}
                      src={`${getImageUrl()}${pic}`}
                      alt={`Feedback attachment ${index + 1}`}
                      className="w-32 h-32 object-cover rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    />
                  ))}
                </div>
              </div>
            )}
        </div>
      ) : (
        <div className="py-10 text-center text-gray-500">
          No feedback data available.
        </div>
      )}
    </Modal>
  );
};

export default ViewFeedbackModal;
