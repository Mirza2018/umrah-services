/* eslint-disable react/prop-types */
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Typography,
} from "antd";
import { toast } from "sonner";
import {
  useAddServiceMutation,
  useEditServiceMutation,
} from "../../../redux/api/adminApi";
import { useEffect, useMemo } from "react";

const EditServiceModal = ({ addService, setAddService, record }) => {
  const [form] = Form.useForm();

  const initialValues = useMemo(() => {
    return {
      name: record?.name,
      type: record?.type,
      amount: record?.amount,
    };
  }, [record]);

  useEffect(() => {
    if (record) {
      form.setFieldsValue(initialValues);
    }
  }, [record, form]);

  const [editServices] = useEditServiceMutation();
  const onFinish = async (values) => {
    const toastId = toast.loading("Service is editing...");
    try {
      const res = await editServices({ data: values, id: record?._id });
      toast.success("Service is edited successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
      setAddService(false);
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
      setAddService(false);
    }
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
                  { value: "flat", label: "Flat Amount" },
                  { value: "percentage", label: "Percentage" },
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
              <InputNumber
                placeholder="Enter Amount"
                className="py-2 px-3 text-xl w-full  !bg-transparent"
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

export default EditServiceModal;
