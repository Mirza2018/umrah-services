/* eslint-disable react/prop-types */
import { Modal } from "antd";
import {
  AllImages,
  Person,
  RideshareIcon,
} from "../../../../public/images/AllImages";

const ViewDriverModal = ({
  isVenueViewModalVisible,
  handleCancel,
  currentVenueRecord,
  handleVenueBlock,
  showVenueBlockModal,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7 text-center">
          <h2 className=" text-base font-normal mb-5">Driver Details</h2>
          <p className="w-full bg-[#FF9815] h-0.5 "></p>
        </div>
      }
      open={isVenueViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:!w-[700px]"
    >
      <div className="px-5 pb-5">
        <div className="">
          <div className="flex justify-center items-center p-4">
            {/* Avatar */}
            <img
              src={Person.passengerPic}
              alt={currentVenueRecord?.companyName}
              className="w-12 h-12 sm:w-16  sm:h-16 rounded-full mr-4"
            />
            <div className="text-xl sm:text-2xl font-bold w-44">
              {currentVenueRecord?.name}
            </div>
          </div>

          <div className="mt-2">
            <div className="text-lg ">
              <div className="flex justify-between border-b-2 pb-3">
                <div className="text-[#535763]">Name</div>
                <div>{currentVenueRecord?.name}</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">E-mail</div>
                <div>{currentVenueRecord?.email}</div>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Phone Number</div>
                <div>{currentVenueRecord?.phone}</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Date of Birth</div>
                <div>12/07/25</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Vehicle Model</div>
                <div>BMW G05</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Vehicle Number</div>
                <div>Dhaka D-11-9999</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Vehicle Color</div>
                <div>Red</div>
              </div>

              <div className="flex justify-between border-b-2 py-3">
                <div className="text-[#535763]">Driving License</div>
                <div>000-0000-0000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start  mt-5 items-start">
          <h2 className=" font-semibold text-2xl mb-5">Documents</h2>

          <div className="flex justify-center items-center gap-4">
            <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center rounded-md">
              <div className="bg-secondary-color rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
                <div>
                  <img src={RideshareIcon.pdfpic} className="" alt="" />
                </div>
              </div>
              <p className="text-xs mb-2 truncate mx-3">Resume.pdf</p>
            </div>
            <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center rounded-md ">
              <div className="bg-secondary-color rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
                <div>
                  <img src={RideshareIcon.pdfpic} alt="" />
                </div>
              </div>
              <p className="text-xs mb-2 truncate mx-3">Resume.pdf</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => (
            handleVenueBlock(currentVenueRecord), showVenueBlockModal()
          )}
          className="bg-secondary-color text-primary-color py-4 text-xl font-semibold rounded-2xl mt-8 max-w-72 w-full"
        >
          Block
        </button>
      </div>
    </Modal>
  );
};

export default ViewDriverModal;

// <div className="px-5 pb-5">
//   <div className="">
//     <div className="flex justify-center items-center p-4">
//       {/* Avatar */}
//       <img
//         src={Person.passengerPic}
//         alt={currentVenueRecord?.companyName}
//         className="w-12 h-12 sm:w-16  sm:h-16 rounded-lg mr-4"
//       />
//       <div className="text-xl sm:text-2xl font-bold w-44">
//         {currentVenueRecord?.name}
//       </div>
//     </div>
//     {/* pdf */}
//     <div className="flex  justify-center">
//       <div className="flex justify-between items-center gap-10">
//         <div className="mt-2 flex flex-col justify-start items-start">
//           <h2 className=" font-semibold text-2xl mb-5">Driver Information</h2>
//           <div className="text-lg w-[90%] ">
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Name:</div>
//               <div>{currentVenueRecord?.name}</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Phone:</div>
//               <div>{currentVenueRecord?.phone}</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Email:</div>
//               <div>{currentVenueRecord?.email}</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Date of Birth:</div>
//               <div>12/07/1999</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold whitespace-nowrap">DL Number:</div>
//               <div>254-1547-5645</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Gender:</div>
//               <div>Male.</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Country:</div>
//               <div>USA.</div>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <div className="font-bold">Location:</div>
//               <div>{currentVenueRecord?.location}</div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h2 className=" font-semibold text-2xl mb-5">Documents</h2>

//           <div className="flex justify-center items-center gap-4">
//             <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center ">
//               <div className="bg-secondary-color rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
//                 <div>
//                   <img src={RideshareIcon.pdfpic} alt="" />
//                 </div>
//               </div>
//               <p className="text-xs mb-2 truncate mx-3">Resume.pdf</p>
//             </div>
//             <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center ">
//               <div className="bg-secondary-color rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
//                 <div>
//                   <img src={RideshareIcon.pdfpic} alt="" />
//                 </div>
//               </div>
//               <p className="text-xs mb-2 truncate mx-3">Resume.pdf</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <button
//     onClick={() => (
//       handleVenueBlock(currentVenueRecord), showVenueBlockModal()
//     )}
//     className="bg-secondary-color text-primary-color py-3 text-xl font-semibold rounded-lg mt-8 w-full"
//   >
//     Block
//   </button>
// </div>;
