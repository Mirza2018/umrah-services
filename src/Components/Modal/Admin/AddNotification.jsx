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
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const AddNotification = () => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const [facilities, setFacilities] = useState([""]); // Array to store facility inputs

  const onFinish = (values) => {
    console.log("subscription:", { ...values, facilities });
    form.resetFields();
    setFacilities([""]); // Reset facilities
  };
  return (
    <div className="m-5 p-5 border border-[#FFC4B0] rounded-lg">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-transparent w-full text-start"
      >
        <Typography.Title level={4} style={{ color: "#222222" }}>
          Type
        </Typography.Title>
        <Form.Item
          rules={[{ required: true, message: "Please Select Type" }]}
          name="type"
        >
          <Select
            showSearch
            // mode="multiple"
            className="h-11 text-xl  !bg-transparent"
            placeholder="Select Type"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "all", label: "All" },
              { value: "customer", label: "Customer" },
              { value: "vendor", label: "Vendor" },
            ]}
          />
        </Form.Item>
        <Typography.Title level={4} style={{ color: "#222222" }}>
          Name
        </Typography.Title>
        <Form.Item
          rules={[{ required: true, message: "Please Select Name" }]}
          name="name"
        >
          <Select
            showSearch
            // mode="multiple"
            className="h-11 text-xl  !bg-transparent"
            placeholder="Select Name"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "all", label: "All" },
              { value: "customer", label: "Customer" },
              { value: "vendor", label: "Vendor" },
            ]}
          />
        </Form.Item>
        <Typography.Title level={4} style={{ color: "#222222" }}>
          Message
        </Typography.Title>
        <Form.Item
          rules={[{ required: true, message: "Please Type Message" }]}
          name="message"
        >
          {/* <Select
            showSearch
            // mode="multiple"
            className="h-11 text-xl  !bg-transparent"
            placeholder="Select Type"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "all", label: "All" },
              { value: "customer", label: "Customer" },
              { value: "vendor", label: "Vendor" },
            ]}
          /> */}
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-3"
            htmlType="submit"
          >
            Send Notification
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNotification;
