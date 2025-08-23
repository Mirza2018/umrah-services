/* eslint-disable react/prop-types */
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form , Input,
  Modal,
  Typography,
} from "antd";
import dayjs from "dayjs";

const ViewOffersModal = ({
  isVenueViewModalVisible,
  handleCancel,
  currentVenueRecord,
  handleVenueBlock,
  showVenueBlockModal,
}) => {
  const [form] = Form.useForm();
  // console.log("currentOrDefault("currentVenueRecord", currentVenueRecord?.date);

  // Parse the date string to a Day.js object
  const parsedDate = currentVenueRecord?.date
    ? dayjs(currentVenueRecord.date, "MMM DD, YYYY")
    : null;

  // Define initial values for the form
  const initialValues = {
    heading: currentVenueRecord?.Heading,
    desc: currentVenueRecord?.Description,
    date: parsedDate, // Set initial date value for the form
  };

  const onFinish = (values) => {
    console.log("Service User:", values);
    handleCancel();
    form.resetFields();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#fff",
            headerBg: "#fff",
          },
        },
      }}
    >
      <Modal
        title={
          <div className="pt-7 text-center">
            <h2 className="text-secondary-color text-4xl ">Edit Details</h2>
          </div>
        }
        open={isVenueViewModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:!w-[700px]"
      >
        <div className="p-10 bg-[#fff]">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full text-start"
            initialValues={initialValues} // Set initial values for the form
          >
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Heading
            </Typography.Title>
            <Form.Item name="heading" className=" ">
              <Input
                placeholder="Enter Heading Name"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Description
            </Typography.Title>
            <Form.Item name="desc" className=" ">
              <Input
                placeholder="Enter Description"
                className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Valid Until
            </Typography.Title>
            <Form.Item name="date" className=" ">
              <DatePicker
                defaultValue={parsedDate}
                format="MMM DD, YYYY"
                placeholder="Enter Date"
                className="py-2 !w-full text-xl border !border-input-color !bg-transparent"
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

export default ViewOffersModal;