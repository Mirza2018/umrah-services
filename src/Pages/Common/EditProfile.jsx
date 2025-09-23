/* eslint-disable no-unused-vars */
import { Button, ConfigProvider, Form, Input, Typography, Upload } from "antd";
import profileImage from "/images/profileImage.png";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { MdOutlineEdit } from "react-icons/md";
import { IoCameraOutline, IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { fladImages } from "../../../public/images/Flad/FladImages";
import { FaChevronLeft } from "react-icons/fa";

const EditProfile = () => {
  const navigate = useNavigate();
  const profileData = {
    firstName: "Profile",

    email: "damienntc@yahoo.com",
    contactNumber: "+2305 123 4567",
    country: "USA",
    city: "california",
    // dob: "10-10-1998",
  };

  const [imageUrl, setImageUrl] = useState(profileImage);

  const handleImageUpload = (info) => {
    if (info.file.status === "removed") {
      setImageUrl(profileImage); // Reset to null or fallback image
    } else {
      const file = info.file.originFileObj || info.file; // Handle the file object safely
      if (file) {
        setImageUrl(URL.createObjectURL(file)); // Set the preview URL of the selected image
      } else {
        console.error("No file selected or file object missing");
      }
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(imageUrl);
    navigate("/admin/profile");
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className=" w-full flex items-center p-5 mb-10  rounded-tl-xl rounded-tr-xl">
        {/* <p className="text-3xl text-black font-semibold w-[95%] mx-auto flex gap-1 items-center">
          Profile Information
        </p> */}
        <p
          onClick={() => window.history.back()}
          className="text-3xl font-semibold flex justify-center items-center gap-2 cursor-pointer"
        >
          <FaChevronLeft /> Edit Information
        </p>
      </div>
      {/* <div className=" flex justify-center items-center"> */}
      <Form
        onFinish={onFinish}
        layout="vertical"
        className="bg-transparent p-4 w-full h-full  md:grid grid-cols-4 gap-2"
      >
        <div className="flex flex-col items-center justify-between  ">
          <div className="flex  flex-col items-center justify-center gap-5 border border-[#000] px-10 py-10 rounded-md bg-[#F5F5F5]">
            <div className="relative">
              <img
                className="h-36 w-36 relative rounded-full"
                src={fladImages.profile}
                alt=""
              />{" "}
              <Form.Item name="image">
                <Upload
                  beforeUpload={() => false} // Prevent automatic upload to server
                  onChange={handleImageUpload}
                  maxCount={1}
                  accept="image/*"
                  className="absolute -top-10 !right-3 text-end noText"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                >
                  <Button
                    style={{
                      zIndex: 1,
                    }}
                    className="bg-white p-2 w-fit h-fit rounded-full shadow !border-none"
                  >
                    <IoCameraOutline
                      className="w-5 h-5"
                      style={{ color: "#19363D" }}
                    />
                  </Button>
                </Upload>
              </Form.Item>
            </div>
            <p className="text-lg font-medium">
              {profileData.firstName} {profileData.LastName}
            </p>
            <p className="text-center text-xl font-medium">Admin</p>
          </div>
        </div>
        <div className="col-span-3 flex flex-col  text-white mt-5 w-full">
          <Typography.Title level={5} style={{ color: "#222222" }}>
            Name
          </Typography.Title>
          <Form.Item className="text-white">
            <Input
              readOnly
              value={profileData.firstName}
              placeholder="Enter your name"
              className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            Email
          </Typography.Title>
          <Form.Item className="text-white ">
            <Input
              value={profileData.email}
              readOnly
              className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>
          <Typography.Title level={5} style={{ color: "#222222" }}>
            Country
          </Typography.Title>
          <Form.Item className="text-white ">
            <Input
              value={profileData.country}
              readOnly
              className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>
          <Typography.Title level={5} style={{ color: "#222222" }}>
            City
          </Typography.Title>
          <Form.Item className="text-white ">
            <Input
              value={profileData.city}
              readOnly
              className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            Phone Number
          </Typography.Title>
          <Form.Item className="text-white ">
            <PhoneInput
              value={profileData.contactNumber}
              className="cursor-not-allowed"
              enableSearch={true}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
    // </div>
  );
};
export default EditProfile;
