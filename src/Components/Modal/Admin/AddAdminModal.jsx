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

const AddAdminModal = ({ isAddAdmin, setisAddAdmin }) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const [facilities, setFacilities] = useState([""]); // Array to store facility inputs

  const onFinish = (values) => {
    console.log("subscription:", { ...values, facilities });
    form.resetFields();
    setFacilities([""]); // Reset facilities
    setisAddAdmin(false);
  };

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
              name="name"
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
              name="Email"
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
              name="category"
            >
              <Select
                showSearch
                mode="multiple"
                className="h-11 text-xl  !bg-transparent"
                placeholder="Select category"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "notification" },
                  { value: "2", label: "feedback" },
                  { value: "3", label: "earning" },
                ]}
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
