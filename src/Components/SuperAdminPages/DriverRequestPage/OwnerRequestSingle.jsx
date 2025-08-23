import React from "react";

import { Link } from "react-router-dom";
import { AllImages, Person } from "../../../../public/images/AllImages";


const OwnerRequestSingle = ({data}) => {
  return (
    <div className="flex  justify-center items-center gap-2 border py-2 rounded-md">
      <img src={Person.samplePerson} alt="" className="w-20" />
      <div className="">
        <h1 className="text-xl font-semibold mb-3">{data?.vendorName}</h1>
        <div className="flex justify-between items-center gap-2">
          <Link to={`deatils/${data?.id}`}>
            <button
              className="font-semibold text-base bg-secondary-color text-white rounded-md  px-3 py-2  hover:scale-105 transition delay-100  text-nowrap
            "
            >
              See Details
            </button>
          </Link>
          <button className="font-semibold text-base   rounded-md border border-secondary-color text-secondary-color  px-3 py-2 hover:scale-105 transition delay-100 ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerRequestSingle;
