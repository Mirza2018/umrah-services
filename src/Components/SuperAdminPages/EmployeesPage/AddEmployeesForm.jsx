/* eslint-disable react/prop-types */
import { InboxOutlined } from "@ant-design/icons";
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
import { FiUpload } from "react-icons/fi";

const AddEmployeesForm = ({
  isAddCompanyModalVisible,
  setIsAddCompanyModalVisible,
}) => { 
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const onFinish = (values) => {
    console.log("Service User:", values);
    form.resetFields();
    setIsAddCompanyModalVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#E5FAE9",
            headerBg: "#E5FAE9",
          },
        },
      }}
    >
      <Modal
        open={isAddCompanyModalVisible}
        onCancel={() => setIsAddCompanyModalVisible(false)}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:!w-[700px]"
      >
        <div className="p-10 bg-[#E5FAE9]">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full text-start"
          >
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Email
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter Email",
                },
              ]}
              name="email"
              className=" "
            >
              <Input
                placeholder="Enter Employe Email"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Category
            </Typography.Title>
            <Form.Item
              className=""
              rules={[
                {
                  required: true,
                  message: "Please Select a category Email",
                },
              ]}
            >
              <Select
                required
                placeholder="Select one"
                className="w-full text-xl !h-12  !bg-[#E5FAE9]"
              >
                <Select.Option value="earningSection">
                  Earning section
                </Select.Option>
                <Select.Option value="passengersSection">
                  Passengers section
                </Select.Option>
                <Select.Option value="driversSection">
                  Drivers section
                </Select.Option>
              </Select>
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Password
            </Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter password",
                },
              ]}
              name="password"
              className=" "
            >
              <Input.Password
                placeholder="Enter Password"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-3"
                htmlType="submit"
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AddEmployeesForm;
