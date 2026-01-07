import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { toast } from "sonner";
import Loading from "../../../Components/UI/Loading";
import { usePrivacyQuery, useTermsAddMutation } from "../../../redux/api/adminApi";

const PrivacyPolicy = () => {
  const { data, isLoading, error } = usePrivacyQuery();
  const [termsAdd] = useTermsAddMutation();
  const [content, setContent] = useState("");

  const myData = data?.data?.attributes?.find((d) => d?.targetAudience == "user");
  useEffect(() => {
    if (myData) {
      setContent(myData?.content);
    }
  }, [myData]);

  

  const handleOnSave = async () => {
    const toastId = toast.loading("Privacy policy is Adding...");
    const data = {
      type: "privacy-policy",
      content: content,
      targetAudience: "user",
    };
    try {
      const res = await termsAdd(data).unwrap();
      toast.success("TPrivacy policy is added Successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("There is some problem, please try later", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  // Loading or error states
  if (isLoading) {
    return <Loading />; // You can use a spinner here
  }

  if (error) {
    return <div>Error loading Customer privacy policy</div>;
  }

  console.log(content);

  return (
    <div
      className=" min-h-[90vh]  rounded-xl bg-white"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className=" w-full flex items-center p-5 mb-10   rounded-tl-xl rounded-tr-xl">
        <p
          onClick={() => window.history.back()}
          className="text-2xl flex  font-semibold items-center cursor-pointer"
        >
          {/* <IoChevronBackOutline
            className="text-4xl cursor-pointer  font-semibold"
         
          /> */}
          <FaChevronLeft />
          Customer Privacy Policy
        </p>
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-full lg:w-[90%]">
          <div className="">
            <JoditEditor
              value={content}
              config={{ height: 500, theme: "light", readonly: false }}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
          <Button
            onClick={handleOnSave}
            className="w-full py-6 border !text-white !border-secondary-color hover:border-secondary-color text-xl  bg-secondary-color hover:!bg-secondary-color font-semibold rounded-2xl mt-8"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
