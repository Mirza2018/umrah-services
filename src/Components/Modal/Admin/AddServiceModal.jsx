/* eslint-disable react/prop-types */
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
import { useState } from "react";

const AddServiceModal = ({ addService, setAddService }) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const [facilities, setFacilities] = useState([""]); // Array to store facility inputs

  const onFinish = (values) => {
    console.log("subscription:", { ...values, facilities });
    form.resetFields();
    setFacilities([""]); // Reset facilities
    setAddService(false);
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
        open={addService}
        onCancel={() => setAddService(false)}
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
              Service Name
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
              Type
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please Select type" }]}
              name="type"
            >
              <Select
                showSearch
                // mode=""
                className="h-11 text-xl  !bg-transparent"
                placeholder="Select type"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "Flat Amount" },
                  { value: "2", label: "Percentage" },
                  { value: "3", label: "Flat Amount & Percentage" },
                ]}
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
            Amount
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Amount" }]}
              name="amount"
            >
              <Input
                placeholder="Enter Amount"
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

export default AddServiceModal;
