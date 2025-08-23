import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { RxUpload } from "react-icons/rx";

const AddRent = ({ setIsModalOpen, isModalOpen }) => {
  const [form] = useForm();

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <Modal
      title=""
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      footer={null}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label={<p className=" font-medium  text-start">Vehicle Model </p>}
          name="vehicleModel  "
          rules={[{ required: true, message: "Please input Vehicle Model !" }]}
        >
          <Input placeholder="Vehicle Model" className="!border-[#0961F5]" />
        </Form.Item>{" "}
        <div className="flex  gap-5">
          <Form.Item
            className="flex-1"
            label={<p className=" font-medium  text-start">Price </p>}
            name="price"
            rules={[{ required: true, message: "Please input Price !" }]}
          >
            <Input
              placeholder="Tyep your Price "
              className="!border-[#0961F5]"
            />
          </Form.Item>
          <Form.Item
            className="flex-1"
            label={<p className=" font-medium  text-start">Days</p>}
            name="days"
            rules={[{ required: true, message: "Please selete Days!" }]}
          >
            <Select
              placeholder={<span className="text-black ">Select days</span>}
              className="!border-[#0961F5] "
              showSearch
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={days}
            />
          </Form.Item>
        </div>
        <Form.Item
          label={<p className=" font-medium  text-start">Phone Number</p>}
          name="phoneNumber"
          rules={[{ required: true, message: "Please input Phone Number!" }]}
        >
          <Input
            placeholder="Type your Number "
            className="!border-[#0961F5]"
          />
        </Form.Item>
        <Form.Item
          label={<p className=" font-medium  text-start">Company Location</p>}
          name="companyLocation"
          rules={[
            { required: true, message: "Please input Company Location!" },
          ]}
        >
          <Input
            placeholder="Type your Company Location "
            className="!border-[#0961F5]"
          />
        </Form.Item>
        <h1 className="text-[#535763] py-2">Upload Vehicle Pictuer</h1>
        <Form.Item label={null} name="image">
          <Upload.Dragger listType="picture-card" className="">
            <div className="flex flex-col items-center">
              <RxUpload className="" />
              Upload
            </div>
          </Upload.Dragger>
        </Form.Item>{" "}
        <Form.Item label={null} className=" flex  justify-center">
          <Button
            type=""
            className="px-40 !border-[#0961F5] !text-black"
            htmlType="submit"
          >
            ADD
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddRent;
const days = [
  { label: "Daley", value: "EL4" },
  { label: "Weekly", value: "EL1" },
  { label: "Monthly", value: "EL2" },
  { label: "Yearly", value: "EL3" },
];
