import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Grid, IconButton, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { theme } from "../../utils/theme";
import { FileUploadActions } from "../../constants/formConst";

export type FilesMetaData = {
  name: string;
  type: string;
  preview: string;
  file: File;
};

type MultipleFilesUploadProps = {
  onUpload: (filesMetaData: FilesMetaData[]) => void;
};

const MultipleFilesUpload = (props: MultipleFilesUploadProps) => {
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
      setUploadedFiles((prev) => [
        ...prev,
        {
          name: file.name,
          type: file.type,
          preview: `data:${file.type}`,
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <Grid container flexDirection={"column"} gap={2}>
      <div
        {...getRootProps()}
        style={{
          border: `1.5px dashed #E0E0E0`,
          width: "100%",
          padding: "3rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "10px",
          cursor: "pointer",
          flexDirection: "column",
        }}
      >
        <Grid container justifyContent={"center"} rowGap={2}>
          <input {...getInputProps()} />
          <Grid width={"100%"} container justifyContent={"center"}>
            <FileUploadOutlinedIcon
              style={{
                width: "40px",
                height: "40px",
                color: "black",
                backgroundColor: "#DDF0FF",
                padding: "7px 12px",
                borderRadius: "20px",
              }}
            />
          </Grid>
          {isDragActive ? (
            <Typography variant="body1">
              {FileUploadActions.DROP_FILES}
            </Typography>
          ) : (
            <Grid display={"flex"} flexDirection={"column"} gap={1}>
              <Grid display={"flex"} flexDirection={"row"} gap={1}>
                <Grid>
                  <Typography
                    variant="bodyMedium4"
                    textAlign={"center"}
                    color={theme.palette.common.black}
                  >
                    {FileUploadActions.CLICK_TO_UPLOAD}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    variant="bodyRegular4"
                    textAlign={"center"}
                    color={"#74797B"}
                  >
                    {FileUploadActions.OR_DRAG_AND_DROP}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>

      {uploadedFiles?.map((item, index) => (
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

export default MultipleFilesUpload;
