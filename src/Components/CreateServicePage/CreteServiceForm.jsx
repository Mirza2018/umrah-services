import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  Modal,
  Typography,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
// import "antd/dist/antd.css";

const { Title } = Typography;
const { Option } = Select;

const CreteServiceForm = () => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  const onFinish = (values) => {
    console.log("subscription:", { ...values });
    form.resetFields();
  };

  return (
    <div className="p-10">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-transparent w-full text-start"
      >
        <div className="flex justify-center items-center">
          <div className="min-w-[500px]">
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Service Type
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please Select Service Type" },
              ]}
              name="type"
            >
              <Select
                showSearch
                // mode=""
                className="h-12 text-xl  !bg-transparent"
                placeholder="Select Service Type"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "Urmah10" },
                  { value: "2", label: "Urmah20" },
                  { value: "3", label: "Urmah30" },
                ]}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-8 md:gap-4 gap-0">
          <div className="flex-1 md:mx-6 mx-2">
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Post Title
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter title" }]}
              name="name"
            >
              <Input
                placeholder="Type Title...."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Package included
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please enter Package included" },
              ]}
              name="package"
            >
              <Input
                placeholder="Type package....."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Description
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Description" }]}
              name="description"
            >
              <TextArea
                rows={2}
                placeholder="Type Description....."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
          </div>
          <div className="flex-1 md:mx-6 mx-2">
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Price
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Price" }]}
              name="price"
            >
              <Input
                placeholder="Type Price...."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <div className="flex gap-2">
              <div className="flex-1">
                <Typography.Title level={4} style={{ color: "#222222" }}>
                  Start Date
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please selete start date",
                    },
                  ]}
                  name="startDate"
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Typography.Title level={4} style={{ color: "#222222" }}>
                  End Date
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please selete end date",
                    },
                  ]}
                  name="endDate"
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </div>
            </div>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Upload Picture
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please Upload Picture" }]}
              name="picture"
            >
              <Dragger>
                <p className=" ">
                  <UploadOutlined className="text-2xl" />
                </p>
                <p className="ant-upload-text">Upload</p>
              </Dragger>
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <Button
            className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-3"
            htmlType="submit"
          >
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreteServiceForm;
