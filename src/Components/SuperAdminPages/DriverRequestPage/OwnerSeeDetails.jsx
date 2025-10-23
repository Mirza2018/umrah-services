import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { Person, RideshareIcon } from "../../../../public/images/AllImages";
import { useRequestedVendorDetailsQuery } from "../../../redux/api/adminApi";
import { getImageUrl } from "../../../redux/getBaseUrl";

const OwnerSeeDetails = () => {
  const params = useParams();
  // console.log(params);

  const { data } = useRequestedVendorDetailsQuery(params?.id);
  console.log(data?.data?.attributes[0]);

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
            src={getImageUrl() + data?.data?.attributes[0]?.image}
            className="w-20"
            alt=""
          />
          <div className="">
            <h1 className="text-xl font-semibold capitalize">
              {data?.data?.attributes[0]?.fullName}
            </h1>
          </div>
        </div>

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
                      {data?.data?.attributes[0]?.fullName}
                    </div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Gender:</div>
                    <div className="capitalize"> {data?.data?.attributes[0]?.gender}</div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Email:</div>
                    <div className="">{data?.data?.attributes[0]?.email}</div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Phone:</div>
                    <div className="">{data?.data?.attributes[0]?.phone}</div>
                  </div>

                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Date of Birth:</div>
                    <div>17/12/2023</div>
                  </div>
                </div>
                <div className="text-lg  ">
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Country:</div>
                    <div> United States</div>
                  </div>

                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Service type:</div>
                    <div>Umrah badal</div>
                  </div>
                  <div className="sm:flex gap-1 sm:gap-2 mb-2">
                    <div className="">Referral Code:</div>
                    <div>0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              <h2 className=" font-semibold text-2xl mb-5">Documents</h2>

              <div className="flex justify-start items-center gap-4">
                <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center ">
                  <div className="bg-[#B3CEFC] rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
                    <div>
                      <img src={RideshareIcon.pdfpic} alt="" />
                    </div>
                  </div>
                  <p className="text-xs mb-2 truncate mx-3">
                    National Identity Card
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button className="font-semibold text-base rounded-md border border-secondary-color text-secondary-color  px-28 py-2 hover:scale-105 transition delay-100 ">
          Delete
        </button>
        <Link to={`accepted`}>
          <button
            className="font-semibold text-base bg-secondary-color rounded-md text-white px-28 py-2  hover:scale-105 transition delay-100  text-nowrap
                     "
          >
            Accept
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerSeeDetails;
