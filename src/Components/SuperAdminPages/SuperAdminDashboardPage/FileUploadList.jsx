import { Image, Skeleton, Space } from "antd";
import { AllImages } from "../../../../public/images/AllImages";
import { useAllBannerQuery } from "../../../redux/api/adminApi";
import { getImageUrl } from "../../../redux/getBaseUrl";
import { useState } from "react";
import DeleteBanner from "./DeleteBanner";

const FileUploadList = () => {
  const { data, isLoading } = useAllBannerQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [record, setRecord] = useState(null);

  const handleDelteBanner = (value) => {
    setRecord(value);
    setIsOpen(true);
  };


  return (
    <div className="w-full max-w-md mx-auto p-4 ">
      <div className="space-y-4">
        {isLoading ? (
          <>
            <Space>
              <Skeleton.Image size="small" active={true} />
              <Skeleton.Input block="false" active={true} />
              <img src={AllImages.deleteAdmin} alt="" />
            </Space>
            <Space>
              <Skeleton.Image size="small" active={true} />
              <Skeleton.Input block="false" active={true} />
              <img src={AllImages.deleteAdmin} alt="" />
            </Space>
            <Space>
              <Skeleton.Image size="small" active={true} />
              <Skeleton.Input block="false" active={true} />
              <img src={AllImages.deleteAdmin} alt="" />
            </Space>
            <Space>
              <Skeleton.Image size="small" active={true} />
              <Skeleton.Input block="false" active={true} />
              <img src={AllImages.deleteAdmin} alt="" />
            </Space>
          </>
        ) : (
          <>
            {" "}
            {data?.data?.attributes?.map((file) => (
              <div
                key={file._id}
                className="flex items-center gap-4 p-3 bg-[#F5F5F5] rounded-lg shadow-sm"
              >
                {/* Upload Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFE3D9] rounded-lg flex items-center justify-center">
                  <Image src={getImageUrl() + file?.image} alt="" />
                </div>

                {/* File Name */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {
                      file?.image?.split("/")[
                        file?.image?.split("/").length - 1
                      ]
                    }
                  </p>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelteBanner(file?._id)}
                  className="flex-shrink-0 p-1 text-orange-500 hover:text-orange-700 transition-colors"
                  aria-label="Delete file"
                >
                  <img src={AllImages.deleteAdmin} alt="" />
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <DeleteBanner setIsOpen={setIsOpen} isOpen={isOpen} record={record} />
    </div>
  );
};

export default FileUploadList;
