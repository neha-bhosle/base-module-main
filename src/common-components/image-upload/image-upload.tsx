import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Box, ButtonBase, Typography } from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
import { commonComponentConstant } from "../../constants/common-component";
import CustomDialog from "../custom-dialog/customDialog";
import { mainStyle, iconStyle, updateFont, fontStyle } from "./image-upload-styles";

interface UploadFileProps {
  customStyle: React.CSSProperties;
  imageUrl?: string | null;
  handleSetImage?: (image: string | ArrayBuffer | null) => void;
  uuid?: string;
  showRemove?: boolean;
}

const UploadImage = (props: UploadFileProps) => {
  const { imageUrl, showRemove } = props;
  // const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | ArrayBuffer | null>(
    imageUrl as string
  );
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [dialogData, setDialogData] = useState({
    labelHeader: "",
    label: "",
    leftButtonLabel: "",
    rightButtonLabel: "",
    subLabel: "",
  });

  const handleDeleteImage = () => {
    setDialogData({
      labelHeader: "Are you sure?",
      label: "Do you want to remove the profile picture?",
      leftButtonLabel: "Cancel",
      rightButtonLabel: "Yes",
      subLabel: "",
    });

    setOpenCustomDialog(true);
  };

  const handleReviewIntake = () => {
    if (props.handleSetImage) props.handleSetImage("");
    setImage(null);
    setOpenCustomDialog(false);
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const fileType = file.type;
          if (fileType === "image/svg+xml") {
            setImage(e.target.result as string);
            props.handleSetImage &&
              props.handleSetImage(e.target.result as string);
          } else {
            const image = new Image();
            image.onload = () => {
              const canvas = document.createElement("canvas");
              const maxWidth = 800;
              const maxHeight = 800;
              let width = image.width;
              let height = image.height;

              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }

              canvas.width = width;
              canvas.height = height;

              const ctx = canvas.getContext("2d");

              if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, width, height);
              }

              const mimeType =
                fileType === "image/png" ? "image/png" : "image/jpeg";
              const compressedBase64 = canvas.toDataURL(mimeType, 0.7);

              setImage(compressedBase64);
              props.handleSetImage && props.handleSetImage(compressedBase64);
            };
            image.src = e.target.result as string;
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const style = {
    ...props.customStyle,
    objectFit: "fill",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "18px",
    border: `1px solid #E7E7E7`,
  };


  const parentStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };

  return (
    <Box sx={mainStyle}>
      <div
        style={{ ...parentStyle, borderRadius: !image ? "100%" : "18px" }}
        onClick={handleBrowseClick}
      >
        <Box sx={style}>
          {!image && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <AddPhotoAlternateOutlinedIcon style={iconStyle} />
              <Typography sx={fontStyle}>
                {commonComponentConstant.UPLOAD_YOUR_PHOTO}
              </Typography>
            </Box>
          )}
          <input
            style={{ display: "none" }}
            type="file"
            id="file-input"
            className="file-input"
            onChange={handleFileChange}
            ref={fileInputRef}
            accept="image/*"
          />
        </Box>
      </div>
      {image && (
        <ButtonBase onClick={handleBrowseClick}>
          <Typography sx={updateFont}>
            {commonComponentConstant.UPDATE}
          </Typography>
        </ButtonBase>
      )}
      {image && showRemove && (
        <ButtonBase onClick={handleDeleteImage}>
          <Typography sx={updateFont}>
            {commonComponentConstant.REMOVE}
          </Typography>
        </ButtonBase>
      )}
      <CustomDialog
        openCustomDialog={openCustomDialog}
        setOpenCustomDialog={setOpenCustomDialog}
        labelHeader={dialogData?.labelHeader}
        label={dialogData?.label}
        leftButtonLabel={dialogData?.leftButtonLabel}
        rightButtonLabel={dialogData?.rightButtonLabel}
        rightButtonAction={handleReviewIntake}
        subLabel={dialogData?.subLabel}
      />
    </Box>
  );
};

export default UploadImage;
