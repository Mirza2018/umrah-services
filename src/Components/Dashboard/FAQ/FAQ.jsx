/* eslint-disable react/no-unescaped-entities */
import { PlusOutlined } from "@ant-design/icons";
import { Form, Pagination } from "antd";
import { Modal } from "antd";
import { Button, Input, Collapse, ConfigProvider } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { BsTrash, BsTrash2 } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import {
  useAddFaqsMutation,
  useDeleteFaqMutation,
  useGetFaqsQuery,
  useUpdateFaqMutation,
} from "../../../redux/api/adminApi";
import { toast } from "sonner";
import { useMemo } from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 5,
  });
  const { data } = useGetFaqsQuery(filters);

  const onPageChange = (page, limit) => {
    setFilters((prev) => ({
      ...prev,
      page,
      limit,
    }));
  };
  console.log(data?.data?.attributes?.result);

  const [addFaq] = useAddFaqsMutation();
  const [EditFaq] = useUpdateFaqMutation();
  const [deleteFaq] = useDeleteFaqMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const [form] = Form.useForm();

  const handleAddFaq = () => {
    setEditingFaq(null);
    setEditingFaq(null);
    setIsModalOpen(true);
    form.resetFields();
  };

  const handleEditFaq = (faq) => {
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const handleDeleteFaq = (id) => {
    setDeleteItem(id);
    setDeleteModalOpen(true);
  };

  const initialValues = useMemo(() => {
    return {
      question: editingFaq?.question,
      answer: editingFaq?.answer,
    };
  }, [editingFaq]);

  useEffect(() => {
    if (editingFaq) {
      form.setFieldsValue(initialValues);
    }
  }, [editingFaq, form]);

  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      <div className="  w-full p-5 mb-10  rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between">
          <p
            onClick={() => window.history.back()}
            className="text-2xl  font-semibold flex  items-center gap-2 cursor-pointer"
          >
            {/* <IoChevronBackOutline
              className="text-4xl cursor-pointer  font-semibold"
              
            /> */}
            <FaChevronLeft />
            FAQ
          </p>
          <Button
            className="gap-2 bg-main-blue hover:bg-main-blue/90"
            onClick={handleAddFaq}
          >
            <BiPlus className="h-4 w-4" />
            Add FAQ
          </Button>
        </div>
      </div>
      <div className=" flex flex-col gap-y-3 p-2">
        {data?.data?.attributes?.result?.map((faq, index) => (
          <div
            key={faq?._id}
            className="p-6 group bg-blue-100 rounded-xl shadow"
          >
            <div className="flex items-start gap-4 ">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white border-blue-600 text-sm font-medium text-secondary-text shrink-0">
                {/* {index + 1} */}
                {index +
                  1 +
                  data?.data?.attributes?.pagination?.limit *
                    (data?.data?.attributes?.pagination?.currentPage - 1)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-foreground">
                  <span className="font-semibold">Qustion:</span>{" "}
                  {faq?.question}
                </h3>
                <p className="mt-2 text-sm text-secondary-text">
                  <span className="font-semibold">Answer:</span> {faq?.answer}
                </p>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="" onClick={() => handleEditFaq(faq)}>
                  <BiEdit className="h-4 w-4 text-lime-600" />
                </Button>
                <Button className="" onClick={() => handleDeleteFaq(faq?._id)}>
                  <BsTrash className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Pagination
          align="end"
          className="pt-5"
          current={data?.data?.attributes?.pagination?.currentPage}
          pageSize={data?.data?.attributes?.pagination?.limit}
          total={data?.data?.attributes?.pagination?.totalResults}
          onChange={onPageChange}
          showSizeChanger
        />
      </div>

      <Modal
        key={editingFaq?._id}
        title={editingFaq ? "Edit FAQ" : "Add FAQ"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText={editingFaq ? "Update" : "Create"}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            const toastId = toast.loading(
              `Faq is ${editingFaq ? "updating..." : "adding..."}`,
            );
            setIsLoading(true);
            try {
              let res;
              if (editingFaq) {
                res = await EditFaq({
                  data: values,
                  id: editingFaq?._id,
                }).unwrap();
              } else {
                res = await addFaq(values).unwrap();
              }

              console.log("Faq Data:", values);
              if (res) {
                setIsLoading(false);
                toast.success(`Faq is ${editingFaq ? "update" : "add"}`, {
                  id: toastId,
                  duration: 2000,
                });
              }
            } catch (err) {
              console.error(err);
              toast.error("There is an error, please try latter", {
                id: toastId,
                duration: 2000,
              });
            } finally {
              setEditingFaq(null);
              setIsModalOpen(false);
              setEditingFaq(null);
              form.resetFields();
            }
          }}
        >
          <Form.Item
            label="Question"
            // initialValue={editingFaq?.question}
            name="question"
            rules={[{ required: true, message: "Question is required" }]}
          >
            <Input
              // defaultValue={editingFaq?.question}
              placeholder="Enter question"
            />
          </Form.Item>

          <Form.Item
            // initialValue={editingFaq?.answer}
            label="Answer"
            name="answer"
            rules={[{ required: true, message: "Answer is required" }]}
          >
            <Input.TextArea
              // defaultValue={editingFaq?.answer}
              rows={4}
              placeholder="Enter answer"
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete FAQ"
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onOk={async () => {
          console.log("DELETE ID:", deleteItem);

          if (!deleteItem) return;

          const toastId = toast.loading("Deleting Faq...");
          setIsLoading(true);
          try {
            const res = await deleteFaq(deleteItem).unwrap();

            console.log("Delete ID:", deleteItem);
            if (res) {
              setIsLoading(false);
              toast.success("Success", { id: toastId, duration: 2000 });
            }
          } catch (err) {
            console.error(err);
            toast.error("There is an error, please try latter", {
              id: toastId,
              duration: 2000,
            });
          } finally {
            setDeleteModalOpen(false);
            setDeleteItem(null);
          }
        }}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete this FAQ?</p>
      </Modal>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
