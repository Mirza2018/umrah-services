import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { FaStripe } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RxUpload } from "react-icons/rx";
import { fladImages } from "../../../public/images/Flad/FladImages";

const AddPayment = ({ setIsPaymentModalOpen, isPaymentModalOpen }) => {
  const [form] = useForm();

  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
    setIsPaymentModalOpen(false);
  };
  return (
    <Modal
      title={
        <div className="text-center flex justify-center items-center gap-2">
          <CgArrowLongLeft className="text-lg" /> Add Payment Method
        </div>
      }
      closable={{ "aria-label": "Custom Close Button" }}
      open={isPaymentModalOpen}
      footer={null}
      // onOk={() => setIsPaymentModalOpen(false)}
      onCancel={() => setIsPaymentModalOpen(false)}
    >
      <div>
        <div className="flex justify-center items-center gap-2 my-2">
         
          <img src={fladImages.stripe} alt="" />
          <img src={fladImages.trip} alt="" />
          <img src={fladImages.paypal} alt="" />
        </div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={<p className=" font-medium  text-start">Credit Card</p>}
            name="creditCard"
            rules={[
              { required: true, message: "Please input Credit Card Number!" },
            ]}
          >
            <Input
              prefix={<HiCreditCard className="text-xl " />}
              placeholder="Credit Card"
              className="!border-[#0961F5]"
            />
          </Form.Item>{" "}
          <div className="flex  gap-5">
            <Form.Item
              className="flex-1"
              label={<p className=" font-medium  text-start">Type</p>}
              name="type"
              rules={[{ required: true, message: "Please selete Type!" }]}
            >
              <Select
                placeholder={<span className="text-black ">Select Type</span>}
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
            <Form.Item
              className="flex-1"
              label={<p className=" font-medium  text-start">CPF </p>}
              name="cpf"
              rules={[{ required: true, message: "Please input CPF !" }]}
            >
              <Input
                placeholder="Tyep your CPF "
                className="!border-[#0961F5]"
              />
            </Form.Item>
          </div>
          <div className="flex  gap-5">
            <Form.Item
              className="flex-1"
              label={<p className=" font-medium  text-start">First Name </p>}
              name="firstName"
              rules={[{ required: true, message: "Please input First Name !" }]}
            >
              <Input
                placeholder="Tyep your First Name "
                className="!border-[#0961F5]"
              />
            </Form.Item>
            <Form.Item
              className="flex-1"
              label={<p className=" font-medium  text-start">Last Name </p>}
              name="lastName"
              rules={[{ required: true, message: "Please input Last Name !" }]}
            >
              <Input
                placeholder="Tyep your Last Name "
                className="!border-[#0961F5]"
              />
            </Form.Item>
          </div>
          <Form.Item
            label={<p className=" font-medium  text-start">Email</p>}
            name="email"
            rules={[{ required: true, message: "Please input Email!" }]}
          >
            <Input
              prefix={<MdEmail className="text-lg text-[#B0B0B0]" />}
              placeholder="Type your Email "
              className="!border-[#0961F5]"
            />
          </Form.Item>
          <Form.Item label={null} className=" flex  justify-center">
            <Button
              type=""
              className="px-40 !border-[#0961F5] !text-black"
              htmlType="submit"
            >
              ADD
            </Button>
          </Form.Item>
        </Form>{" "}
      </div>
    </Modal>
  );
};

export default AddPayment;
const days = [
  { label: "Personal", value: "EL4" },
  { label: "Others", value: "EL1" },
];
