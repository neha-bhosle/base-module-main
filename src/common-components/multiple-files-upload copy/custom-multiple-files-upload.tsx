import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Grid, IconButton, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { theme } from "../../utils/theme";
import uploadIcon from "../../assets/images/file_upload.svg";
import { FileUploadActions } from "../../constants/formConst";

export type FilesMetaData = {
  name: string;
  type: string;
  preview: string;
  base64: string;
  file: File;
};

type MultipleFilesUploadProps = {
  onUpload: (filesMetaData: FilesMetaData[]) => void;
  sides: string;
  documentName: string;
};

const CustomMultipleFilesUpload = (props: MultipleFilesUploadProps) => {
  const { onUpload } = props;
  const [uploadedFiles, setUploadedFiles] = useState<FilesMetaData[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (
      acceptedFiles[0].type.includes("application/pdf") ||
      acceptedFiles[0].type.includes("image/png") ||
      acceptedFiles[0].type.includes("image/jpeg") ||
      acceptedFiles[0].type.includes("text/csv")
    ) {
      const file = acceptedFiles[0];
      const base64Data = await convertToBase64(file);
      setUploadedFiles((prev) => [
        ...prev,
        {
          name: file.name,
          type: file.type,
          preview: `data:${file.type}`,
          base64: base64Data,
          file,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    onUpload(uploadedFiles);
  }, [uploadedFiles, onUpload]);

  const handleDelete = (index: number) => {
    setUploadedFiles((prev) => {
      const arr = structuredClone(prev);
      arr.splice(index, 1);
      return arr;
    });
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = btoa(reader.result as string);
        resolve(base64Data);
      };
      reader.readAsBinaryString(file);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <Grid container flexDirection={"column"} gap={2}>
      <div
        {...getRootProps()}
        style={{
          border: `2px solid ${theme.palette.grey[500]}`,
          width: "100%",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "10px",
          cursor: "pointer",
          flexDirection: "column",
        }}
      >
        <Grid container justifyContent={"center"} rowGap={1}>
          <input {...getInputProps()} />
          <Grid width={"100%"} container justifyContent={"center"}>
            <img
              src={uploadIcon}
              style={{
                width: "2rem",
                height: "2rem",
                color: theme.palette.grey[500],
              }}
            />
          </Grid>
          {isDragActive ? (
            <Typography variant="body1">
              {FileUploadActions.DROP_FILES}
            </Typography>
          ) : (
            <Grid>
              <Typography
                variant="body2"
                textAlign={"center"}
                fontWeight={550}
                color={theme.palette.common.black}
              >
                Click here to upload {props.sides} Side of your{" "}
                {props.documentName}
              </Typography>
              {/* here or click to select files. Only pdf,
							png or jpeg. */}
              <Typography
                variant="body2"
                textAlign={"center"}
                fontWeight={550}
                color={theme.palette.common.black}
              >
                {/* Or */}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={550}
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                {FileUploadActions.OR_DRAG_AND_DROP}
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
      {/* <Grid>
        <Typography variant="body5" color={theme.palette.grey[600]}>
          {"Supported formats: pdf, png, jpeg, csv"}
        </Typography>
      </Grid> */}
      {uploadedFiles.map((item, index) => (
        <Grid
          container
          sx={{ background: theme.palette.grey[300], padding: 1 }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid
            item
            container
            alignItems={"center"}
            width={"fit-content"}
            gap={5}
          >
            {item.type.includes("image") && (
              <img height={"80px"} src={item.preview} />
            )}
            {!item.type.includes("image") && (
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                width={"80px"}
                height={"80px"}
              >
                <InsertDriveFileIcon fontSize="large" />
              </Grid>
            )}
            <Typography variant="body1">{item.name}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleDelete(index)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomMultipleFilesUpload;
