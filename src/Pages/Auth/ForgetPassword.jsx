import { Button, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";
import { AllImages, AuthImages } from "../../../public/images/AllImages";
import { useForgetPasswordMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  setForgotPasswordToken,
  setResendSignUpToken,
} from "../../redux/slices/authSlice";

const ForgotPassword = () => {
  const [forgotPassEmail] = useForgetPasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const toastId = toast.loading("Password is reseting...");
    console.log("Success:", values);

    try {
      const res = await forgotPassEmail(values).unwrap();

      console.log("res: ", res?.data?.attributes);
      dispatch(setForgotPasswordToken(res?.data?.attributes));
      // dispatch(setResendSignUpToken(res?.data?.attributes));

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      navigate("/verify-otp");
    } catch (error) {
      console.error("Login Error:", error);

      toast.error("There is an problem , please try latter", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="">
      <div className="max-w-[750px] w-[90%] mx-auto flex flex-col justify-center gap-10 items-center min-h-screen bg-site-color py-10">
        <div className="">
          <img src={AllImages.logo} alt="logo" className=" mx-auto w-96" />
        </div>
        <div className="w-full md:w-[80%] lg:w-full mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center mt-5 mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                Forget password
              </h1>
              <p className="md:text-lg lg:text-xl mb-2 ">
                Enter your email address to get a verification code for
                resetting your password.
              </p>
            </div>

            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Email is Required",
                  },
                ]}
                name="email"
                className=""
              >
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="py-2 px-3 text-xl bg-site-color border !border-input-color  hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  className="w-full py-6 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded-2xl mt-8"
                  htmlType="submit"
                >
                  Get OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
