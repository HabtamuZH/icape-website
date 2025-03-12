// src/components/Blog/ImageUpload.js
import React from "react";

const ImageUpload = ({
  image,
  onImageChange,
  imagePreview,
  onRemoveImage,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor="image"
        className="block mb-2 text-sm font-body font-medium text-gray-700"
      >
        Upload Blog Image (Max 5MB, JPG/PNG)
      </label>
      <input
        type="file"
        id="image"
        accept="image/jpeg,image/jpg,image/png"
        onChange={onImageChange}
        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 font-body text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />
      {imagePreview && (
        <div className="mt-4 relative inline-block">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-md"
          />
          <button
            type="button"
            onClick={onRemoveImage}
            className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full transform translate-x-1/2 -translate-y-1/2"
          >
            ✕
          </button>
        </div>
      )}
      {error && (
        <span className="text-red-500 text-xs mt-2 block">{error}</span>
      )}
    </div>
  );
};

export default ImageUpload;
