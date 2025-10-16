import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";
import { AllImages } from "../../../public/images/AllImages";
import EditPost from "./EditPost";
import { useAllServicesQuery } from "../../redux/api/adminApi";
import { getImageUrl } from "../../redux/getBaseUrl";
import DeletePost from "./DeletePost";
// import { MoreHorizontal } from "lucide-react";

export default function AllPost() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [postValue, setPostValue] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const { data, isLoading } = useAllServicesQuery();

  // console.log(data?.data?.attributes?.support);
  // console.log(data?.data?.attributes?.pagination);

  const toggleMenu = (postId) => {
    setActiveMenu(activeMenu === postId ? null : postId);
  };

  const handleEdit = (post) => {
    setPostValue(post);
    setIsEdit(true);
    setActiveMenu(null);
  };

  const handleDelete = (post) => {
    setPostValue(post);
    setIsDelete(true);
    setActiveMenu(null);
  };

  return (
    <div className="max-w-4xl  p-6 bg-white">
      <div className="space-y-4">
        {data?.data?.attributes?.support.map((post) => (
          <div
            key={post._id}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* Post Image */}
            <div className="flex-shrink-0">
              <img
                src={getImageUrl() + post?.image}
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {post.title}
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-2">
                $ {post.price}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>

            {/* Menu Button */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => toggleMenu(post._id)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
              >
                <MdMoreVert />
              </button>

              {/* Dropdown Menu */}
              {activeMenu === post._id && (
                <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                  <button
                    onClick={() => handleEdit(post)}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post)}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <EditPost isEdit={isEdit} setIsEdit={setIsEdit} postValue={postValue} />
      <DeletePost
        isDelete={isDelete}
        setIsDelete={setIsDelete}
        postValue={postValue}
      />
    </div>
  );
}
