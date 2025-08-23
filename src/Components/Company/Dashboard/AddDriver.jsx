import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { RxUpload } from "react-icons/rx";

const AddDriver = () => {
  const [form] = useForm();
  const props = {
    listType: "picture",
  };
  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <div className="text-black ps-5">
      <h1 className="text-xl font-medium py-4">ADD DRIVER</h1>
      <Form form={form} onFinish={onFinish} autoComplete="off">
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Full Name</p>
          }
          name="fullName"
          rules={[{ required: true, message: "Please input Full Name!" }]}
        >
          <Input placeholder="Full Name" className="!border-[#0961F5]" />
        </Form.Item>
        <Form.Item
          label={<p className="text-lg font-medium w-44 text-start">Email</p>}
          name="email"
          rules={[{ required: true, message: "Please input Email!" }]}
        >
          <Input placeholder="Email" className="!border-[#0961F5]" />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Phone Number</p>
          }
          name="phoneNumber"
          rules={[{ required: true, message: "Please input Phone Number!" }]}
        >
          <Input placeholder="Phone Number" className="!border-[#0961F5]" />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">
              Driving License
            </p>
          }
          name="drivinglicense"
          rules={[{ required: true, message: "Please input Driving License!" }]}
        >
          <Input placeholder="Driving License" className="!border-[#0961F5]" />
        </Form.Item>
        <div className="grid  md:gap-5 grid-cols-1 md:grid-cols-2">
          <Form.Item
            label={
              <p className="text-lg font-medium w-44 text-start">Password</p>
            }
            name="password"
            rules={[{ required: true, message: "Please enter password!" }]}
          >
            <Input.Password
              placeholder="Password"
              className="!border-[#0961F5]"
            />
          </Form.Item>
          <Form.Item
            label={
              <p className="text-lg font-medium w-44 text-start">
                Confirm Password
              </p>
            }
            name="reEnterPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Re-Enter Password"
              className="!border-[#0961F5]"
            />
          </Form.Item>
        </div>
        <Form.Item label={null} className=" flex  justify-end">
          <Button
            type=""
            className="px-8 !border-[#0961F5] !text-black"
            htmlType="submit"
          >
            ADD
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddDriver;
