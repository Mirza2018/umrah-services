import React from "react";

import { Link } from "react-router-dom";
import { AllImages, Person } from "../../../../public/images/AllImages";
import { getImageUrl } from "../../../redux/getBaseUrl";

const OwnerRequestSingle = ({ data, setRequestedDrivers, setIsDeleted }) => {
  // console.log(data?.serviceType?._id);

  return (
    <div className="flex  justify-center items-center gap-2 border py-2 rounded-md">
      <img src={getImageUrl() + data?.image} alt="" className="w-20" />
      <div className="">
        <h1 className="text-xl font-semibold mb-3 capitalize">
          {data?.fullName}
        </h1>
        <div className="flex justify-between items-center gap-2">
          <Link to={`details/${data?._id}/${data?.serviceType?.type}`}>
            <button
              className="font-semibold text-base bg-secondary-color text-white rounded-md  px-3 py-2  hover:scale-105 transition delay-100  text-nowrap
            "
            >
              See Details
            </button>
          </Link>
          <button
            onClick={() => {
              setIsDeleted(true);
              setRequestedDrivers(data);
            }}
            className="font-semibold text-base   rounded-md border border-secondary-color text-secondary-color  px-3 py-2 hover:scale-105 transition delay-100 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerRequestSingle;
