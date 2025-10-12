import { EditOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import { FaChevronLeft } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { fladImages } from "../../../public/images/Flad/FladImages";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useUserProfileQuery } from "../../redux/api/adminApi";
import { useEffect, useMemo, useState } from "react";
import { getImageUrl } from "../../redux/getBaseUrl";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.accessToken);
  const user = jwtDecode(token);
  const [form] = Form.useForm();
  const { data, isLoading } = useUserProfileQuery();
  const initialValues = useMemo(() => {
    const user = data?.data?.attributes[0];
    return {
      fullName: user?.fullName || "",
      email: user?.email,
      phoneNumber: user?.phoneNumber || "",
      city: user?.city || "",
      image: getImageUrl() + user?.image,
    };
  }, [data]);
  useEffect(() => {
    if (data?.data?.attributes) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, data, form]);

  const [imageUrl, setImageUrl] = useState(initialValues?.image);
  useEffect(() => {
    setImageUrl(initialValues?.image);
  }, [initialValues.image]);
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
                className="aspect-square object-contain w-36 relative rounded-full"
                src={imageUrl}
                alt=""
              />
              <p className="text-lg font-medium">{initialValues?.fullName}</p>
              <p className="text-center text-xl font-medium">Admin</p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col items-center text-white mt-5">
            <Form
              form={form}
              layout="vertical"
              className="bg-transparent p-4 w-full"
            >
              <Typography.Title level={5} style={{ color: "#222222" }}>
                Name
              </Typography.Title>
              <Form.Item className="text-white" name={`fullName`}>
                <Input
                  readOnly
                  placeholder="Enter your name"
                  className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>

              <Typography.Title level={5} style={{ color: "#222222" }}>
                Email
              </Typography.Title>
              <Form.Item className="text-white " name={`email`}>
                <Input
                  readOnly
                  className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>

              <Typography.Title level={5} style={{ color: "#222222" }}>
                City
              </Typography.Title>
              <Form.Item className="text-white " name={`city`}>
                <Input
                  readOnly
                  className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <Typography.Title level={5} style={{ color: "#222222" }}>
                Phone Number
              </Typography.Title>
              <Form.Item className="text-white " name={`phoneNumber`}>
                <PhoneInput
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
