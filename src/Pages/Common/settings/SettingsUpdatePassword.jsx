import { Button, Form, Input, Typography } from "antd";
import { IoChevronBackOutline } from "react-icons/io5";
import { useChangePasswordMutation } from "../../../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const SettingsUpdatePassword = () => {
  const [changePass] = useChangePasswordMutation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("Success:", values);
    const data = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    const toastId = toast.loading("Password is Changing...");

    try {
      const res = await changePass(data).unwrap();
      console.log(res);
      toast.success("Password Change Successfully.", {
        id: toastId,
        duration: 2000,
      });
      form.resetFields();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message || "There is an problrm , please try letter.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-secondary-color w-full p-5 mb-10  rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center ">
          <IoChevronBackOutline
            className="text-4xl cursor-pointer  font-semibold"
            onClick={() => window.history.back()}
          />
          <p className="text-2xl  font-semibold">
            Update Password
          </p>
        </div>
      </div>
      <div className="md:p-14 lg:p-20 flex justify-center items-center">
        <div className="w-full ">
          <div className="mb-10">
            <p className="text-3xl lg:text-[40px]  font-medium mb-8">
              Update Password
            </p>
            <p className="md:text-xl ">
              To update your password, check email for OTP being sent. Enter it
              in designated field to complete reset process.
            </p>
          </div>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <Typography.Title level={4} style={{ color: "#222222" }}>
              New password
            </Typography.Title>
            <Form.Item
              rules={[
                { required: true, message: "Please enter your new password!" },
              ]}
              name="newPassword"
              className="text-white"
            >
              <Input.Password
                placeholder="Enter your password"
                className="py-2 px-3 text-xl border !border-input-color ! !bg-transparent"
              />
            </Form.Item>
            <Typography.Title level={4} style={{ color: "#222222" }}>
              Re-enter new Password
            </Typography.Title>
            <Form.Item
              name="reEnterPassword"
              className="text-white"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
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
                placeholder="Enter your password"
                className="py-2 px-3 text-xl border !border-input-color ! !bg-transparent"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full py-6 border !border-secondary-color hover:border-secondary-color text-xl !text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded mt-8"
                htmlType="submit"
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SettingsUpdatePassword;
