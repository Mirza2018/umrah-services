/* eslint-disable react/prop-types */
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Typography,
  Upload,
} from "antd";
import { toast } from "sonner";
import { usePostDiscountMutation } from "../../../redux/api/adminApi";

const AddDiscountModal = ({ isAddAdmin, setisAddAdmin }) => {
  const [form] = Form.useForm();
  const [postDiscount] = usePostDiscountMutation();

  const onFinish = async (values) => {
    const toastId = toast.loading("Discount code is Creating...");

    try {
      const res = await postDiscount(values);
      toast.success("Discount code created successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
    }
    form.resetFields();
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
              Discound Code
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please enter discound Code" },
              ]}
              name="couponCode"
            >
              <Input
                placeholder="Discound Code"
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Discount Amount
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please enter discount amount" },
              ]}
              name="discountAmount"
            >
              <Input
                placeholder="Enter Discount Amount"
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Expire Date
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please select expire date" }]}
              name="expireDate"
            >
              {/* <Input
                placeholder="Select expire date"
                className="py-2 px-3 text-xl  !bg-transparent"
              /> */}
              <DatePicker
                placeholder="Select expire date"
                className="py-2 px-3 text-xl  !bg-transparent w-full"
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

export default AddDiscountModal;
