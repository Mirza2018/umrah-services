/* eslint-disable react/prop-types */
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Select,
  Typography,
  Upload,
} from "antd";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useAddAdminMutation } from "../../../redux/api/adminApi";
import { toast } from "sonner";

const AddAdminModal = ({ isAddAdmin, setisAddAdmin }) => {
  const [form] = Form.useForm();
  const [addAdmin] = useAddAdminMutation();
  const { Dragger } = Upload;

  // const onFinishr = (values) => {
  //   console.log("subscription:", { ...values, facilities });
  //   form.resetFields();

  //   setisAddAdmin(false);
  // };
  const onFinish = async (values) => {
    const toastId = toast.loading("New Admin is Creating...");

    console.log(values);
    values.adminRole = "sub-admin";

    try {
      const res = await addAdmin(values);
      toast.success("Admin created successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
    }
    form.resetFields();
    setisAddAdmin(false);
  };

  const optionsPath = pathsArray.map((path) => ({
    label: <div className="capitalize">{path?.name}</div>,
    value: path.path,
    name: path?.name,
  }));


  
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#FFFF",
            headerBg: "#FFFF",
          },
        },
      }}
    >
      <Modal
        open={isAddAdmin}
        onCancel={() => setisAddAdmin(false)}
        footer={[]}
        centered
        style={{ textAlign: "center" }}
        className="lg:!w-[700px]"
      >
        <div className="p-10">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full text-start"
          >
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Full Name
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Name" }]}
              name="fullName"
            >
              <Input
                placeholder="Enter Name"
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Email
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Email" }]}
              name="email"
            >
              <Input
                placeholder="Enter Email"
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Category
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please Select Category" }]}
              name="categoryPermissions"
            >
              <Select
                showSearch
                mode="multiple"
                className="h-11 text-xl  !bg-transparent"
                placeholder="Select category"
                filterOption={(input, option) =>
                  (option?.name ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                filterSort={(optionA, optionB) => {
                  return (optionA?.name ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.name ?? "").toLowerCase());
                }}
                options={optionsPath}
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Password
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter password" }]}
              name="password"
            >
              <Input.Password
                placeholder="********"
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-3"
                htmlType="submit"
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AddAdminModal;

const pathsArray = [
  { name: "customers", path: "customers" },
  { name: "all-vendors", path: "all-vendors" },
  { name: "Vendors Platform Onboarding Requestst", path: "vendors-request" },
  { name: "services-managements", path: "services-managements" },
  { name: "create-service", path: "create-service" },
  { name: "Vendor additional services requestt", path: "service-request" },
  { name: "earnings", path: "earnings" },
  { name: "all-admin", path: "all-admin" },
  { name: "refunds", path: "refunds" },
  { name: "feedback", path: "feedback" },
  { name: "payouts", path: "payouts" },
  { name: "contacts", path: "contacts" },
  { name: "notification-status", path: "notification-status" },
  { name: "notification-requests", path: "notification-requests" },
  // { name: "notifications", path: "notifications" },
  { name: "show-feedback", path: "show-feedback" },
];
