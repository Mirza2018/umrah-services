import { Form, Input, Typography } from "antd";
import profileImage from "/images/profileImage.png";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { fladImages } from "../../../public/images/Flad/FladImages";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("home_care_user"));
  const profileData = {
    firstName: "Profile",

    email: "damienntc@yahoo.com",
    contactNumber: "+2305 123 4567",
    country: "USA",
    city: "california",
    // dob: "10-10-1998",
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4  flex md:flex-row flex-col rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between ms-5">
          <p
            onClick={() => window.history.back()}
            className="text-3xl font-semibold flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaChevronLeft /> Personal Information
          </p>
        </div>
        <Link
          to={`/${user?.role}/settings/edit-profile`}
          className="hover:text-primary-color ml-auto "
        >
          <div className=" bg-secondary-color  flex justify-center items-center gap-2 py-2 px-3 rounded-lg cursor-pointer border-2 border-[#0000002e]">
            <EditOutlined
              className="text-xl font-medium"
              style={{ color: "#FAFAFA" }}
            />
            <p className="md:text-2xl text-lg text-white font-semibold whitespace-nowrap">
              Edit Profile
            </p>
          </div>
        </Link>
      </div>



      <div className=" flex justify-center items-center">
        <div className=" rounded-lg h-full w-full md:grid grid-cols-4 ps-4">
          <div className="flex flex-col items-center justify-between  ">
            <div className="flex flex-col items-center justify-center gap-5 border border-[#000] px-10 py-10 rounded-md bg-[#F5F5F5]">
              <img
                className="h-36 w-36 relative rounded-full"
                src={fladImages.profile}
                alt=""
              />
              <p className="text-lg font-medium">
                {profileData.firstName} {profileData.LastName}
              </p>
              <p className="text-center text-xl font-medium">Admin</p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col items-center text-white mt-5">
            <Form layout="vertical" className="bg-transparent p-4 w-full">
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
              {/* <Form.Item
                initialValue={profileData.contactNumber}
                name="contactNumber"
                className="text-white"
              > */}
              {/* <PhoneInput className="" enableSearch={true} /> */}
              {/* </Form.Item> */}
              {/* <Typography.Title level={5} style={{ color: "#222222" }}>
                Date Of Birth
              </Typography.Title>
              <Form.Item className="text-white">
                <Input
                  readOnly
                  value={profileData.dob}
                  placeholder="Enter Date of Birth"
                  className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item> */}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
