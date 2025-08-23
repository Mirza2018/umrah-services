import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import AddEmployeesForm from "./AddEmployeesForm";

const AddEmployeesModel = () => {
  const [isAddCompanyModalVisible, setIsAddCompanyModalVisible] =
    useState(false);
  return (
    <div className="px-5 mt-5 ">
      <div
        onClick={() => setIsAddCompanyModalVisible(true)}
        className="bg-secondary-color  flex justify-center items-center gap-2 py-2 w-full rounded-lg cursor-pointer"
      >
        <IoMdAddCircleOutline className="md:text-3xl text-2xl" />
        <p className="md:text-2xl text-lg font-semibold whitespace-nowrap">
          Add Employees
        </p>
      </div> 
      <AddEmployeesForm
        isAddCompanyModalVisible={isAddCompanyModalVisible}
        setIsAddCompanyModalVisible={setIsAddCompanyModalVisible}
      />
    </div>
  );
};

export default AddEmployeesModel;
