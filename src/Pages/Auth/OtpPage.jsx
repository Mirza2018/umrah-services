import { Button, Form } from "antd";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AllImages } from "../../../public/images/AllImages";
import {
  useForgetOtpVerifyMutation,
  useResendOTPMutation,
} from "../../redux/api/authApi";
import { clearAuth, setResetPasswordToken } from "../../redux/slices/authSlice";

const OtpPage = () => {
  const [varifyOtp] = useForgetOtpVerifyMutation();
  const [resendOtp] = useResendOTPMutation();
  const [isResend, setIsResend] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const forgotToken = useSelector((state) => state.auth.forgotPasswordToken);
  const resendToken = useSelector(
    (state) => state.auth.resendForgotPasswordToken
  );
  // setForgotPasswordToken
  const token = resendToken || forgotToken;

  const decodeToken = token ? jwtDecode(token) : [];

  const handleResendOtp = async () => {
    const toastId = toast.loading("Resending the OTP...");
    setIsResend(true);
    const data = {
      email: decodeToken?.email,
    };
    try {
      const res = await resendOtp(data).unwrap();
      dispatch(setResetPasswordToken(res?.data?.forgetPasswordToken));
      console.log(res);
      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.error("RedendOTP Error:", error); // Log the error for debugging

      toast.error(
        "An error occurred while resending the OTP. Please try again later.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  const handleOTPSubmit = async () => {
    // dispatch(clearResendSignUpToken());

    const toastId = toast.loading("OTP submiting...");
    console.log("OTP:", otp);

    let data;
    if (isResend) {
      data = {
        otp: otp,
        purpose: "resend-otp",
      };
    } else {
      data = {
        otp: otp,
        purpose: "forget-password",
      };
    }
    console.log(data);

    try {
      const res = await varifyOtp(data).unwrap();
      console.log(res);

      toast.success("Otp varify successfully", {
        id: toastId,
        duration: 2000,
      });
      dispatch(clearAuth());
      dispatch(setResetPasswordToken(res?.data?.forgetPasswordToken));

      navigate("/update-password");
    } catch (error) {
      console.error("Login Error:", error);

      toast.error(
        "An error occurred during Varify Opt. Please try again later.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <div className="">
      <div className="max-w-[750px] w-[90%] mx-auto flex md:flex-row flex-col justify-center gap-10 items-center min-h-screen bg-site-color  md:py-10 py-5">
        <div className="">
          <img
            src={AllImages.logo}
            alt="logo"
            className=" mx-auto lg:w-72 w-32"
          />
        </div>

        <div className="w-full md:w-[80%] lg:w-[50%] ">
          <div className="">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                Verify OTP
              </h1>
              <p className="md:text-lg lg:text-xl mb-2 ">
                Please check your email. We have sent a code to contact
                @gmail.com
              </p>
            </div>

            <Form layout="vertical" className="bg-transparent w-full">
              <Form.Item className="">
                <div className="flex justify-center items-center">
                  <OTPInput
                    inputStyle="!w-[55px] h-[45px] !sm:w-[76px] sm:h-[64px] text-[20px] sm:text-[30px] bg-transparent border border-input-color
                      hover:border-input-color focus:bg-transparent focus:border-input-color rounded-lg mr-[10px] sm:mr-[20px] "
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} required />}
                  />
                </div>
              </Form.Item>
              <div className="flex justify-between py-1">
                <p>Didn`t receive code?</p>
                <p
                  onClick={handleResendOtp}
                  className="!text-[#19363D] !underline font-semibold cursor-pointer"
                >
                  Resend
                </p>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  className="w-full py-6 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color hover:!bg-secondary-color font-semibold rounded-2xl mt-8"
                  onClick={handleOTPSubmit}
                >
                  Submit OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtpPage;
