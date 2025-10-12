import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useTermsAddMutation, useTermsQuery } from "../../../redux/api/adminApi";
import { toast } from "sonner";
import Loading from "../../../Components/UI/Loading";

const TermsOfService = () => {
  const { data, isLoading, error } = useTermsQuery();
  const [termsAdd] = useTermsAddMutation();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data?.data?.attributes?.content) {
      setContent(data?.data?.attributes?.content);
    }
  }, [data?.data?.attributes?.content]);

  const handleOnSave = async () => {
    const toastId = toast.loading("Terms Of Service is Adding...");
    const data = {
      type: "terms-of-condition",
      content: content,
    };
    try {
      const res = await termsAdd(data).unwrap();
      toast.success("Terms Of Service is added Successfully", {
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
    return <div>Error loading privacy policy</div>;
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
          Terms of Services
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
export default TermsOfService;
