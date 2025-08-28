import { AllImages } from "../../../../public/images/AllImages";

const FileUploadList = () => {
  const files = [
    { id: 1, name: "Product thumbnail.png" },
    { id: 2, name: "Product thumbnail.png" },
    { id: 3, name: "Product thumbnail.png" },
  ];

  const handleDelete = (fileId) => {
    console.log("Delete file with id:", fileId);
    // Add your delete logic here
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 ">
      <div className="space-y-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-4 p-3 bg-[#F5F5F5] rounded-lg shadow-sm"
          >
            {/* Upload Icon Container */}
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFE3D9] rounded-lg flex items-center justify-center">
              <img src={AllImages.adminUpload} alt="" />
            </div>

            {/* File Name */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {file.name}
              </p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(file.id)}
              className="flex-shrink-0 p-1 text-orange-500 hover:text-orange-700 transition-colors"
              aria-label="Delete file"
            >
              <img src={AllImages.deleteAdmin} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadList;
