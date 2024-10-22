import React, { useState } from "react";

const AdditionalDocuments = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <div >
      

        {/* Tabs */}
        <div className="p-6">

          {/* File Upload Section */}
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-12 text-center mb-6">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer text-gray-500 hover:text-black"
            >
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mb-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v3H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-1 7V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Click to upload or drag & drop</p>
                <p className="text-sm text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </label>
          </div>

          {/* Upload Button */}
          <div className="flex justify-start mb-6">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Upload
            </button>
          </div>

          {/* Uploaded Documents Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Uploaded Documents</h3>
            <div className="border rounded-lg">
              {uploadedFiles.length === 0 ? (
                <p className="p-4 text-center text-gray-500">
                  No documents uploaded
                </p>
              ) : (
                <ul className="divide-y">
                  {uploadedFiles.map((file, index) => (
                    <li
                      key={index}
                      className="p-4 flex items-center justify-between"
                    >
                      <span>{file.name}</span>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDocuments;
