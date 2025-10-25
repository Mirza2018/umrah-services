import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { Person, RideshareIcon } from "../../../../public/images/AllImages";
import { useRequestedVendorDetailsQuery } from "../../../redux/api/adminApi";
import { getImageUrl } from "../../../redux/getBaseUrl";
import dayjs from "dayjs";
import DeleteVendorRequest from "../../../Pages/SuperAdmin/DeleteVendorRequest";
import { useState } from "react";
import AcceptVendorRequest from "../../../Pages/SuperAdmin/AcceptVendorRequest";
import { Image } from "antd";

const OwnerSeeDetails = () => {
  const { id, sID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  // console.log(params);

  const { data } = useRequestedVendorDetailsQuery({ id, sID });
  // console.log(data?.data?.attributes[0]);

  return (
    <div className="bg-white rounded-tl-xl rounded-tr-xl">
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl mb-20">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p
            onClick={() => window.history.back()}
            className="text-3xl font-semibold flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaChevronLeft /> Request Details
          </p>
        </div>
      </div>
      <div className="container mx-10">
        <div className="flex  justify-start items-center gap-2 mx-5 mb-4">
          <img
            src={getImageUrl() + data?.data?.attributes?.image}
            className="w-20"
            alt=""
          />
          <div className="">
            <h1 className="text-xl font-semibold capitalize">
              {data?.data?.attributes?.fullName}
            </h1>
          </div>
        </div>

        <DeleteVendorRequest
          isDeleted={isDeleted}
          setIsDeleted={setIsDeleted}
          driverData={id}
          sID={sID}
        />

        <AcceptVendorRequest
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
          driverData={id}
          sID={sID}
        />
        <div className="flex flex-col justify-start  gap-9">
          <div className="">
            <div className="mt-2">
              <h2 className="font-bold text-3xl mb-5">Personal Information</h2>

              <div className="grid md:grid-cols-2 ">
                <div className="text-lg  ">
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Name:</div>
                    <div className="capitalize">
                      {" "}
                      {data?.data?.attributes?.fullName}
                    </div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Gender:</div>
                    <div className="capitalize">
                      {" "}
                      {data?.data?.attributes?.gender}
                    </div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Email:</div>
                    <div className="">{data?.data?.attributes?.email}</div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Phone:</div>
                    <div className="">{data?.data?.attributes?.phone}</div>
                  </div>

                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Date of Birth:</div>
                    <div>
                      {dayjs(data?.data?.attributes?.dob).format("DD/MM/YYYY")}
                    </div>
                  </div>
                </div>
                <div className="text-lg  ">
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Country:</div>
                    <div> {data?.data?.attributes?.country}</div>
                  </div>

                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Service type:</div>
                    <div>{data?.data?.attributes?.serviceTypeInfo?.name}</div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Referral Code:</div>
                    <div>{data?.data?.attributes?.yourRefaralCode}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            {data?.data?.attributes?.document &&  <div>
              <h2 className=" font-semibold text-2xl mb-5">Documents</h2>

              <div className="flex justify-start items-center gap-4">
                <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center ">
                  <div className="bg-[#B3CEFC] rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
                    <div>
                      <Image
                        src={getImageUrl() + data?.data?.attributes?.document}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-xs mb-2 truncate mx-3">
                    {
                      data?.data?.attributes?.document?.split("/")[
                        data?.data?.attributes?.document?.split("/").length - 1
                      ]
                    }
                  </p>
                </div>
              </div>
            </div>}
           
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={() => setIsDeleted(true)}
          className="font-semibold text-base rounded-md border border-secondary-color text-secondary-color  px-28 py-2 hover:scale-105 transition delay-100 "
        >
          Delete
        </button>
        <p>
          <button
            onClick={() => setIsUpdated(true)}
            className="font-semibold text-base bg-secondary-color rounded-md text-white px-28 py-2  hover:scale-105 transition delay-100  text-nowrap
                     "
          >
            Accept
          </button>
        </p>
      </div>
    </div>
  );
};

export default OwnerSeeDetails;
