/* eslint-disable no-unused-vars */
import { Button, Form, Input, Select, Typography, Upload } from "antd";
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import {
  useUpdateUserMutation,
  useUserProfileQuery,
} from "../../redux/api/adminApi";
import { getImageUrl } from "../../redux/getBaseUrl";
import { setUserInfo } from "../../redux/slices/authSlice";
import profileImage from "/images/profileImage.png";
import { Country, City } from "country-state-city";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const EditProfile = () => {
  const [profileUpdate, { isLoading }] = useUpdateUserMutation();
  const { data } = useUserProfileQuery();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth?.userInfo);
  const [selectedCountryIso, setSelectedCountryIso] = useState(
    userInfo?.country || null,
  );

  const initialValues = useMemo(() => {
    return {
      fullName: userInfo?.fullName || data?.data?.attributes[0].fullName || "",
      email: userInfo?.email,
      phoneNumber:
        userInfo?.phoneNumber || data?.data?.attributes[0].phoneNumber || "",
      city: userInfo?.city || data?.data?.attributes[0].city || "",
      country: userInfo?.country || data?.data?.attributes[0].country || "",
      image: getImageUrl() + userInfo?.image,
    };
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, userInfo, form]);
  useEffect(() => {
    const countryName = userInfo?.country || initialValues.country;
    if (countryName) {
      const country = Country.getAllCountries().find(
        (c) => c.name === countryName,
      );
      if (country) {
        setSelectedCountryIso(country.isoCode);
        // Also ensure city options are available
      }
    }
  }, [userInfo, initialValues.country]);

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

  // All countries with flags
  const countryOptions = useMemo(() => {
    return Country.getAllCountries()
      .map((country) => ({
        label: `${country.flag} ${country.name}`,
        value: country.isoCode,
        name: country.name,
        countryName: country.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  // All cities of selected country
const cityOptions = useMemo(() => {
  if (!selectedCountryIso) return [];
  const cities = City.getCitiesOfCountry(selectedCountryIso) || [];
  const seen = new Set();
  return cities
    .filter((city) => {
      if (seen.has(city.name)) return false;
      seen.add(city.name);
      return true;
    })
    .map((city) => ({
      label: city.name,
      value: city.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}, [selectedCountryIso]);

  useEffect(() => {
    setImageUrl(initialValues.image);
  }, [initialValues.image]);

  const onFinish = async (values) => {
    const toastId = toast.loading("Profile is updating...");

    const data = {
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      city: values.city,
      country: values.country,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (values?.image?.fileList?.[0].originFileObj) {
      const profileImage = values.image?.fileList[0]?.originFileObj;
      formData.append("profileImage", profileImage);
    }

    try {
      const res = await profileUpdate(formData).unwrap();
      dispatch(setUserInfo(res?.data?.attributes));
      toast.success("Profile successfully updated.", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("There is a problem, please try later", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div
      className="bg-highlight-color min-h-[90vh] rounded-xl"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="w-full flex items-center p-5 mb-10 rounded-tl-xl rounded-tr-xl">
        <p
          onClick={() => window.history.back()}
          className="text-3xl font-semibold flex justify-center items-center gap-2 cursor-pointer"
        >
          <FaChevronLeft /> Edit Information
        </p>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-transparent p-4 w-full h-full md:grid grid-cols-4 gap-2"
      >
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-5 border border-[#000] px-10 py-10 rounded-md bg-[#F5F5F5]">
            <div className="relative">
              <img
                className="w-36 aspect-square object-contain relative rounded-full"
                src={imageUrl}
                alt=""
              />
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
            <p className="text-center text-xl font-medium capitalize">
              {userInfo?.role}
            </p>
          </div>
        </div>

        <div className="col-span-3 flex flex-col text-white mt-5 w-full">
          <Typography.Title level={5} style={{ color: "#222222" }}>
            Name
          </Typography.Title>
          <Form.Item className="text-white" name={`fullName`}>
            <Input
              placeholder="Enter your name"
              className="py-2 px-3 text-xl bg-site-color border hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            Email
          </Typography.Title>
          <Form.Item className="text-white" name={`email`}>
            <Input
              readOnly
              className="cursor-not-allowed py-2 px-3 text-xl bg-site-color border hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />
          </Form.Item>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Country */}
            <div>
              <Typography.Title
                level={5}
                className="text-gray-700 font-medium mb-2"
              >
                Country
              </Typography.Title>
              <Form.Item
                name="country"
                rules={[{ required: true, message: "Please select country" }]}
              >
                <Select
                  showSearch
                  size="large"
                  placeholder="Search country"
                  options={countryOptions}
                  onChange={(value, option) => {
                    setSelectedCountryIso(value); // value = isoCode
                    form.setFieldsValue({
                      country: option.countryName, // you're saving country NAME to form
                      city: undefined,
                    });
                  }}
                  value={form.getFieldValue("country")}
                  optionFilterProp="label"
                  filterOption={(input, option) =>
                    option.label.toLowerCase().includes(input.toLowerCase())
                  }
                  className="w-full"
                  popupClassName="rounded-xl"
                />
              </Form.Item>
            </div>

            {/* City */}
            <div>
              <Typography.Title
                level={5}
                className="text-gray-700 font-medium mb-2"
              >
                City
              </Typography.Title>
              <Form.Item
                name="city"
                rules={[{ required: true, message: "Please select city" }]}
              >
                <Select
                  showSearch
                  placeholder="Select City"
                  options={cityOptions}
                  optionFilterProp="label"
                  filterOption={(input, option) =>
                    option.label.toLowerCase().includes(input.toLowerCase())
                  }
                  className="w-full h-10"
                  popupClassName="rounded-xl"
                  virtual={false}
                />
              </Form.Item>
            </div>
          </div>

          <Typography.Title level={5} style={{ color: "#222222" }}>
            Phone Number
          </Typography.Title>
          <Form.Item className="text-white" name={`phoneNumber`}>
            <PhoneInput className="" enableSearch={true} />
          </Form.Item>

          <div className="flex justify-end !w-full gap-5 ">
            <Button
              onClick={() => window.history.back()}
              className="bg-main-color transition delay-150 duration-100 py-6 px-8 text-xl rounded-xl text-black font-bold cursor-pointer"
            >
              Cancel
            </Button>
            <Form.Item>
              <Button
                disabled={isLoading}
                htmlType="submit"
                className={`!bg-green-400 transition delay-150 duration-100 ${isLoading ? "py-6 px-2  " : "py-6 px-10 "} rounded-xl !text-white font-bold cursor-pointer text-xl !border-0`}
              >
                {isLoading ? (
                  <div className="gap-2 flex justify-center items-center">
                    <Spin
                      indicator={<LoadingOutlined spin />}
                      style={{ color: "white" }}
                      size="default"
                    />
                    Updateing ...
                  </div>
                ) : (
                  "Update"
                )}
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
