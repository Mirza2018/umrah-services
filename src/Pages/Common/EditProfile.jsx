/* eslint-disable no-unused-vars */
import { Button, Form, Input, Typography, Upload } from "antd";
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { toast } from "sonner";
import {
  useUpdateUserMutation,
  useUserProfileQuery,
} from "../../redux/api/adminApi";
import { getImageUrl } from "../../redux/getBaseUrl";
import profileImage from "/images/profileImage.png";

const EditProfile = () => {
  const { data, isLoading } = useUserProfileQuery();
  const [profileUpdate] = useUpdateUserMutation();
  const [form] = Form.useForm();

  console.log(data?.data?.attributes[0]?.fullName);

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

  const [imageUrl, setImageUrl] = useState(initialValues.image);

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

  useEffect(() => {
    setImageUrl(initialValues.image);
  }, [initialValues.image]);

  const onFinish = async (values) => {
    const toastId = toast.loading("Profile  is updateing ...");

    const data = {
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      city: values.city,
    };

    // console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (values?.image?.fileList?.[0].originFileObj) {
      const profileImage = values.image?.fileList[0]?.originFileObj;

      console.log(profileImage);
      formData.append("profileImage", profileImage);
    }

    try {
      const res = await profileUpdate(formData).unwrap();

      console.log("API Response:", res);
      toast.success("Profile sucessfully update.", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);

      toast.error("There is an problem please try latter", {
        id: toastId,
        duration: 2000,
      });
    }
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
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-transparent p-4 w-full h-full  md:grid grid-cols-4 gap-2"
      >
        <div className="flex flex-col items-center justify-between  ">
          <div className="flex  flex-col items-center justify-center gap-5 border border-[#000] px-10 py-10 rounded-md bg-[#F5F5F5]">
            <div className="relative">
              <img
                className=" w-36 aspect-square object-contain relative rounded-full"
                src={imageUrl}
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
            <p className="text-lg font-medium">{initialValues.fullName}</p>
            <p className="text-center text-xl font-medium">Admin</p>
          </div>
        </div>
        <div className="col-span-3 flex flex-col  text-white mt-5 w-full">
          <Typography.Title level={5} style={{ color: "#222222" }}>
            Name
          </Typography.Title>
          <Form.Item className="text-white" name={`fullName`}>
            <Input
              placeholder="Enter your name"
              className="  py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            Email
          </Typography.Title>
          <Form.Item className="text-white " name={`email`}>
            <Input
              readOnly
              className="cursor-not-allowed  py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            City
          </Typography.Title>
          <Form.Item className="text-white " name={`city`}>
            <Input className="  py-2 px-3 text-xl bg-site-color border  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color" />
          </Form.Item>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            Phone Number
          </Typography.Title>
          <Form.Item className="text-white " name={`phoneNumber`}>
            <PhoneInput className=" " enableSearch={true} />
          </Form.Item>

          <div className="flex justify-end !w-full gap-5 ">
            <Button
              onClick={() => window.history.back()}
              className="bg-main-color  transition delay-150 duration-100 py-6 px-8 text-xl rounded-xl text-black font-bold cursor-pointer"
            >
              Cancel
            </Button>
            <Form.Item className="">
              <Button
                htmlType="submit"
                className="bg-green-400 transition delay-150 duration-100 py-6 px-10 rounded-xl  text-white font-bold cursor-pointer text-xl"
              >
                Edit
              </Button>
            </Form.Item>{" "}
          </div>
        </div>
      </Form>
    </div>
    // </div>
  );
};
export default EditProfile;
