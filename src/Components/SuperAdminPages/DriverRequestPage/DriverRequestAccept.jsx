import React from "react";
import { Link } from "react-router-dom";

import { FaChevronLeft } from "react-icons/fa";
import { AllImages, Person, RideshareIcon } from "../../../../public/images/AllImages";

const DriverRequestAccept = () => {
  return (
    <div className="bg-white rounded-tl-xl rounded-tr-xl">
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl mb-20">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p 
            onClick={() => window.history.back()}
            className="text-3xl  font-semibold flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaChevronLeft /> Accepted Driver Request
          </p>

        </div>
      </div>
      <div className="container mx-10">
        <div className="flex  justify-start items-center gap-2 mx-5 mb-4">
          <img src={Person.samplePerson} className="w-20" alt="" />
          <div className="">
            <h1 className="text-xl font-semibold">Dianne Russell</h1>
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
                              <div>name</div>
                            </div>
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Gender:</div>
                              <div>Male</div>
                            </div>
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Email:</div>
                              <div>email</div>
                            </div>
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Phone:</div>
                              <div>phone</div>
                            </div>
          
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Date of Birth:</div>
                              <div>17/12/2023</div>
                            </div>
                          </div>
                          <div className="text-lg  ">
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Vehicle Model :</div>
                              <div>BMW G05</div>
                            </div>
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Vehicle Number :</div>
                              <div>Dhaka D-11-9999</div>
                            </div>
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Vehicle Color :</div>
                              <div>Red</div>
                            </div>
                            <div className="sm:flex gap-1 sm:gap-2 mb-2">
                              <div className="">Driving License :</div>
                              <div>000-0000-0000</div>
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
                            <div className="bg-secondary-color rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
                              <div>
                                <img src={RideshareIcon.pdfpic} alt="" />
                              </div>
                            </div>
                            <p className="text-xs mb-2 truncate mx-3">Resume.pdf</p>
                          </div>
                          <div className="w-28 bg-[#B4B8BD] h-36 flex flex-col justify-center ">
                            <div className="bg-secondary-color rounded-full aspect-square flex justify-center items-center w-24 h-24 m-auto">
                              <div>
                                <img src={RideshareIcon.pdfpic} alt="" />
                              </div>
                            </div>
                            <p className="text-xs mb-2 truncate mx-3">Resume.pdf</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      </div>
    </div>
  );
};

export default DriverRequestAccept;
