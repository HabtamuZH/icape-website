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
        className="block mb-2 text-sm font-body font-medium text-primary"
      >
        Upload Blog Image (Max 5MB, JPG/PNG)
      </label>
      <input
        type="file"
        id="image"
        accept="image/jpeg,image/jpg,image/png"
        onChange={onImageChange}
        className="w-full px-4 py-3 rounded-md border border-border bg-light text-primary font-body text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-body file:bg-accent file:text-light hover:file:bg-opacity-80"
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
            className="absolute top-0 right-0 bg-red-500 text-light text-xs p-1 rounded-full transform translate-x-1/2 -translate-y-1/2"
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
