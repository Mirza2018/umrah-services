import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import AddOffersForm from "./AddOffersForm";

const AddOffersModel = () => {
  const [isAddCompanyModalVisible, setIsAddCompanyModalVisible] =
    useState(false);
  return (
    <div className="px-5 mt-5 flex justify-end">
      <div
        onClick={() => setIsAddCompanyModalVisible(true)}
        className="bg-secondary-color text-white flex justify-center items-center gap-2 py-2 w-64 rounded-lg cursor-pointer"
      >
        <IoMdAddCircleOutline className="md:text-3xl text-2xl" />
        <p className="md:text-2xl text-lg font-semibold whitespace-nowrap">
          Add Offers
        </p>
      </div>
      <AddOffersForm
        isAddCompanyModalVisible={isAddCompanyModalVisible}
        setIsAddCompanyModalVisible={setIsAddCompanyModalVisible}
      />
    </div>
  );
};

export default AddOffersModel;
