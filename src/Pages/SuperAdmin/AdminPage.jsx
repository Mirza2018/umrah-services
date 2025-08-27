import { useState } from "react";
import AddAdminModal from "../../Components/Modal/Admin/AddAdminModal";
import AdminTable from "../../Components/SuperAdminPages/AdminPage/AdminTable";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const AdminPage = () => {
  const [isAddAdmin, setisAddAdmin] = useState(false);
  return (
    <div
      className="bg-highlight-color min-h-[90vh]  rounded-xl"
      style={{ boxShadow: "0px 0px 5px  rgba(0, 0, 0, 0.25)" }}
    >
      {/* Header  */}
      <div className=" w-full p-4  flex rounded-tl-xl rounded-tr-xl">
        <div className=" w-[95%] mx-auto  flex items-center justify-between ms-5">
          <p className="text-3xl  font-semibold">Make Admins</p>
          <div className="flex gap-4 items-center"></div>
        </div>

        <div
          onClick={() => setisAddAdmin(true)}
          className="bg-transparent text-black flex justify-center items-center gap-2 py-2 w-96 rounded-lg cursor-pointer border-2 border-[#0000002e]"
        >
          <IoMdAdd className="md:text-3xl text-2xl" />
          <p className="md:text-2xl text-lg font-semibold whitespace-nowrap">
            Add Admin
          </p>
        </div>
      </div>

      <AddAdminModal isAddAdmin={isAddAdmin} setisAddAdmin={setisAddAdmin} />
      <main className="p-5">
        <AdminTable />
      </main>
    </div>
  );
};

export default AdminPage;
