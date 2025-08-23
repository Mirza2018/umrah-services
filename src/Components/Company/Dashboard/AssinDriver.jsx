import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { RxUpload } from "react-icons/rx";

const AssinDriver = () => {
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
      <h1 className="text-xl font-medium py-4">ASSIGN DRIVER</h1>
      <Form form={form} onFinish={onFinish} autoComplete="off">
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">
              Select Vehicle
            </p>
          }
          name="selectVehicle"
          rules={[{ required: true, message: "Please Select Vehicle!" }]}
        >
          <Select
            placeholder={<span className="text-black text-xl">Vehicle</span>}
            className="!border-[#0961F5] "
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={vehicle}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Select Driver</p>
          }
          name="driver"
          rules={[{ required: true, message: "Please Select Driver!" }]}
        >
          <Select
            placeholder={
              <span className="text-black text-xl">Drivers name</span>
            }
            className="!border-[#0961F5] "
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={driver}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Rental Period</p>
          }
          name="rentalPeriod"
          rules={[{ required: true, message: "Please Select Rental Period!" }]}
        >
          <Select
            placeholder={
              <span className="text-black text-xl">Rental Period</span>
            }
            className="!border-[#0961F5] "
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={period}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">
              Select Withdraw
            </p>
          }
          name="selectWithdraw"
          rules={[{ required: true, message: "Please Select Withdraw!" }]}
        >
          <Select
            placeholder={
              <span className="text-black text-xl">Select Withdraw</span>
            }
            className="!border-[#0961F5] "
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={withdraw}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="text-lg font-medium w-44 text-start">Select %</p>
          }
          name="selectPercent"
          rules={[{ required: true, message: "Please Select   %!" }]}
        >
          <Select
            placeholder={<span className="text-black text-xl">Select %</span>}
            className="!border-[#0961F5] "
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={selectPersent}
          />
        </Form.Item>

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

export default AssinDriver;


const vehicle = [
  { label: "BMW", value: "EL" },
  { label: "Ferari", value: "Benzin" },
  { label: "Tesla", value: "Hybrid Benzin" },

];
const driver = [
  { label: "Rahim", value: "EL" },
  { label: "Karim", value: "Benzin" },
  { label: "Hanif", value: "Hybrid Benzin" },

];
const period = [
  { label: "1 year", value: "EL1" },
  { label: "2 year", value: "E2L" },
  { label: "3 year", value: "EL3" },
  { label: "4 year", value: "EL4" },
  { label: "5 year", value: "EL5" },
];
const withdraw = [
  { label: "Weekly", value: "EL1" },
  { label: "Monthly", value: "EL2" },
  { label: "Yearly", value: "EL3" },
];
const selectPersent = [
  { label: "10%", value: "EL1" },
  { label: "20%", value: "EL2" },
  { label: "30%", value: "EL3" },
  { label: "40%", value: "EL4" },
  { label: "50%", value: "EL5" },

];
