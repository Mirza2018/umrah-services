import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  Upload
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import {
  useAllServiceQuery,
  useCreateServiceMutation,
} from "../../redux/api/adminApi";
// import "antd/dist/antd.css";

const { Title } = Typography;
const { Option } = Select;

const CreteServiceForm = ({ setService }) => {
  const { data: serviceType, isLoading } = useAllServiceQuery();
  const serviceTypeData = serviceType?.data?.attributes;
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const [createService] = useCreateServiceMutation();
  // const [facilities, setFacilities] = useState([""]); // Array to store facility inputs

  // const addFacilityInput = () => {
  //   setFacilities([...facilities, ""]);
  // };

  // const handleFacilityChange = (index, value) => {
  //   const newFacilities = [...facilities];
  //   newFacilities[index] = value;
  //   setFacilities(newFacilities);
  // };

  const onFinish = async (values) => {
    const data = { ...values };
    delete data.picture;
    const formData = new FormData();
    formData.append("data", JSON.stringify(data))
    
      if (values?.picture?.fileList?.[0].originFileObj) {
        const profileImage = values.picture?.fileList[0]?.originFileObj;

        console.log(profileImage);
        formData.append("image", profileImage);
      }
    const toastId = toast.loading("Service is createing...");
    try {
      const res = await createService(formData);
      toast.success("Service is added successfully", {
        id: toastId,
        duration: 2000,
      });
      console.log(res);
      // setAddService(false);
      form.resetFields();
      setService("post");
    } catch (error) {
      toast.error("There is some Problem please try latter", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
      // setAddService(false);
    }
  };

  const uploadCommonProps = {
    beforeUpload: () => false, // prevent auto-upload
    maxCount: 1,
    accept: "image/*",
    listType: "picture",
    showUploadList: { showRemoveIcon: true },
  };
  const serviceTypeOption = serviceType?.data?.attributes?.map(
    (serviceData) => ({
      label: (
        <div>
          {/* {console.log(serviceData)} */}
          <p>{serviceData?.name}</p>
        </div>
      ),
      value: serviceData?._id,
      name: serviceData?.name,
    })
  );

  return (
    <div className="p-10">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-transparent w-full text-start"
      >
        <div className="flex justify-center items-center">
          <div className="min-w-[500px]">
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Service Type
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please Select Service Type" },
              ]}
              name="serviceType"
            >
              <Select
                showSearch
                // mode=""
                className="h-12 text-xl  !bg-transparent"
                placeholder="Select Service Type"
                filterSort={(optionA, optionB) => {
                  return (optionA?.name ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.name ?? "").toLowerCase());
                }}
                optionFilterProp="name"
                filterOption={(input, option) => {
                  console.log(option);

                  return option?.name
                    ?.toLowerCase()
                    .includes(input.toLowerCase());
                }}
                options={serviceTypeOption}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-8 md:gap-4 gap-0">
          <div className="flex-1 md:mx-6 mx-2">
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Post Title
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter title" }]}
              name="title"
            >
              <Input
                placeholder="Type Title...."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Description
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Description" }]}
              name="description"
            >
              <TextArea
                rows={2}
                placeholder="Type Description....."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Package included
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please enter Package included" },
              ]}
              name="packageName"
            >
              <Input
                placeholder="Type package....."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Package details
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter details" }]}
              name="packageDesc"
            >
              <TextArea
                rows={2}
                placeholder="Type details....."
                className="py-2 px-3 text-xl  !bg-transparent"
              />
            </Form.Item>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Facilities
            </Typography.Title>
            <Form.List
              name="facilities"
              initialValue={[""]} // This ensures that at least one field is present by default
              rules={[
                {
                  validator: async (_, facilities) => {
                    if (!facilities || facilities.length < 1) {
                      return Promise.reject(
                        new Error("At least one facility is required")
                      );
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div key={key} className="flex items-center gap-2">
                      <Form.Item
                        {...restField}
                        name={[name]}
                        rules={[
                          {
                            required: true,
                            message: "Please enter a facility",
                          },
                        ]}
                        className="flex-1"
                      >
                        <Input
                          placeholder="Enter Plan Facility"
                          className="py-2 px-3 text-xl border !border-input-color !bg-transparent"
                        />
                      </Form.Item>
                      {fields.length > 1 && (
                        <Button
                          type="text"
                          icon={<MinusCircleOutlined />}
                          onClick={() => remove(name)}
                          className="text-red-500"
                        />
                      )}
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    className="w-full mb-4"
                  >
                    Add another Facility
                  </Button>
                </>
              )}
            </Form.List>
          </div>
          <div className="flex-1 md:mx-6 mx-2 ">
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Price
            </Typography.Title>
            <Form.Item
              rules={[{ required: true, message: "Please enter Price" }]}
              name="price"
            >
              <InputNumber
                placeholder="Type Price...."
                className="py- px-3 text-xl w-full !bg-transparent"
              />
            </Form.Item>
            <div className="flex gap-2">
              <div className="flex-1">
                <Typography.Title level={4} style={{ color: "#222222" }}>
                  Start Date
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please selete start date",
                    },
                  ]}
                  name="startDate"
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Typography.Title level={4} style={{ color: "#222222" }}>
                  End Date
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please selete end date",
                    },
                  ]}
                  name="endDate"
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </div>
            </div>

            <Typography.Title level={4} style={{ color: "#222222" }}>
              Upload Picture
            </Typography.Title>
            <Form.Item
              className="!max-w-sm"
              rules={[{ required: true, message: "Please Upload Picture" }]}
              name="picture"
            >
              <Dragger {...uploadCommonProps} listType="picture">
                <p className=" ">
                  <UploadOutlined className="text-2xl" />
                </p>
                <p className="ant-upload-text">Upload</p>
              </Dragger>
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <Button
            className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-3"
            htmlType="submit"
          >
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreteServiceForm;
