import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";

interface ImageUploadProps {
  initialImage?: string;
  onImageChange?: (file: File) => void;
  size?: number;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  initialImage,
  onImageChange,
  size = 150,
  disabled = false,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(initialImage || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange?.(file);
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Avatar
        src={previewUrl}
        alt="Profile Picture"
        sx={{
          width: size,
          height: size,
          bgcolor: "#f5f5f5",
          color: "#757575",
          cursor: disabled ? "default" : "pointer",
        }}
        onClick={handleImageClick}
      />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: "none" }}
        disabled={disabled}
      />
    </div>
  );
};

export default ImageUpload;
