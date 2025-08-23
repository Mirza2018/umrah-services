import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { RxUpload } from "react-icons/rx";

const AddVehicle = () => {
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
      <h1 className="text-xl font-medium py-4">ADD VEHICLE</h1>
      <Form form={form} onFinish={onFinish} autoComplete="off">
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Brand Name</p>
          }
          name="brandName"
          rules={[{ required: true, message: "Please input Brand Name!" }]}
        >
          <Input placeholder="Brand Name" className="!border-[#0961F5]" />
        </Form.Item>
        <Form.Item
          label={<p className="text-lg font-medium w-44 text-start">Model</p>}
          name="model"
          rules={[{ required: true, message: "Please input Model!" }]}
        >
          <Input placeholder="Model" className="!border-[#0961F5]" />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Plate Number</p>
          }
          name="plateNumber"
          rules={[{ required: true, message: "Please input Plate Number!" }]}
        >
          <Input placeholder="Plate Number" className="!border-[#0961F5]" />
        </Form.Item>
        <Form.Item
          label={<p className="text-lg font-medium w-44 text-start">Colour</p>}
          name="colour"
          rules={[{ required: true, message: "Please input Colour!" }]}
        >
          <Input placeholder="Colour" className="!border-[#0961F5]" />
        </Form.Item>
        <div className="grid grid-cols-3">
          <div className=" flex flex-col justify-start">
            <h1 className="text-[#535763] py-2">
              Upload Vehicle Pictuer (If you have)
            </h1>
            <Form.Item label={null} name="image">
              <Upload.Dragger listType="picture-card" className="">
                <div className="flex flex-col items-center">
                  <RxUpload className="text-lg" />
                  Upload
                </div>
              </Upload.Dragger>
              {/* <Upload.Dragger
            multiple="true"
        
            name="files"
            maxCount={10}
  
          >
            <p className="flex justify-center items-center">
            
            </p>
            <p className="ant-upload-text">
              Drag and drop up to 10 images here
            </p>
            <p className="ant-upload-text">or click to upload.</p>
          </Upload.Dragger> */}
            </Form.Item>{" "}
          </div>
          <div></div>
          <Form.Item label={null} className=" flex  justify-end">
            <Button
              type=""
              className="px-8 !border-[#0961F5] !text-black"
              htmlType="submit"
            >
              ADD
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddVehicle;
