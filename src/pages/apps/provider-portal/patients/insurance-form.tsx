import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import CustomInput from "../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import MultipleFilesUpload, {
  FilesMetaData,
} from "../../../../common-components/multiple-files-upload copy/multiple-files-upload";
import { FormData } from "./insurance-tab";
import CustomDatePicker from "../../../../common-components/custom-date-picker/custom-date-picker";
import {
  PatientFormLabels,
  PatientFormPlaceholders,
  PatientFormSectionTitles,
  PatientRelationshipOptions,
  PatientInsuranceOptions,
  UploadFileComponentConstants,
} from "../../../../constants/formConst";

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export const InsuranceForm = (props: Props) => {
  const { control, errors } = props;
  const [, setUploadedFrontFiles] = useState<FilesMetaData[]>([]);
  return (
    <Grid bgcolor={"#FFFFFF"} borderRadius={2}>
      <Grid container border="1px solid #E0E0E0" borderRadius={2} p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomLabel label={PatientFormLabels.INSURANCE_NAME} isRequired />
            <Controller
              control={control}
              name="insuranceName"
              render={({ field }) => (
                <CustomSelect
                  placeholder={PatientFormPlaceholders.SELECT_INSURANCE_NAME}
                  name={field.name}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  items={[
                    { value: "aetna", label: PatientInsuranceOptions.AETNA },
                    {
                      value: "bluecross",
                      label: PatientInsuranceOptions.BLUE_CROSS,
                    },
                    { value: "cigna", label: PatientInsuranceOptions.CIGNA },
                    { value: "united", label: PatientInsuranceOptions.UNITED },
                  ]}
                  hasError={!!errors.insuranceName}
                  errorMessage={errors.insuranceName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={PatientFormLabels.MEMBER_ID} isRequired />
            <Controller
              control={control}
              name="memberId"
              render={({ field }) => (
                <CustomInput
                  placeholder={PatientFormPlaceholders.ENTER_MEMBER_ID}
                  {...field}
                  hasError={!!errors.memberId}
                  errorMessage={errors.memberId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={PatientFormLabels.GROUP_ID} isRequired />
            <Controller
              control={control}
              name="groupId"
              render={({ field }) => (
                <CustomInput
                  placeholder={PatientFormPlaceholders.ENTER_GROUP_ID}
                  {...field}
                  hasError={!!errors.groupId}
                  errorMessage={errors.groupId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={PatientFormLabels.PATIENT_RELATIONSHIP} />
            <Controller
              control={control}
              name="patientRelationship"
              render={({ field }) => (
                <RadioGroup row {...field} sx={{ gap: 4, marginTop: 1 }}>
                  <FormControlLabel
                    value="self"
                    control={<Radio />}
                    label={PatientRelationshipOptions.SELF}
                  />
                  <FormControlLabel
                    value="spouse"
                    control={<Radio />}
                    label={PatientRelationshipOptions.SPOUSE}
                  />
                  <FormControlLabel
                    value="child"
                    control={<Radio />}
                    label={PatientRelationshipOptions.CHILD}
                  />
                  <FormControlLabel
                    value="dependent"
                    control={<Radio />}
                    label={PatientRelationshipOptions.DEPENDENT}
                  />
                </RadioGroup>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              {PatientFormSectionTitles.SUBSCRIBER_DETAILS}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={PatientFormLabels.FIRST_NAME} isRequired />
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <CustomInput
                  placeholder={PatientFormPlaceholders.ENTER_FIRST_NAME}
                  {...field}
                  hasError={!!errors.firstName}
                  errorMessage={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={PatientFormLabels.LAST_NAME} isRequired />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <CustomInput
                  placeholder={PatientFormPlaceholders.ENTER_LAST_NAME}
                  {...field}
                  hasError={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={PatientFormLabels.DATE_OF_BIRTH} isRequired />
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field }) => (
                <CustomDatePicker
                  placeholder={PatientFormPlaceholders.SELECT_DATE}
                  value={field.value || ""}
                  handleDateChange={field.onChange}
                  hasError={!!errors.dateOfBirth}
                  errorMessage={errors.dateOfBirth?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, mt: 2 }}>
              {PatientFormSectionTitles.UPLOAD_INSURANCE_CARD}
            </Typography>
          </Grid>
          <Grid container spacing={2} width={"50%"} ml={0.5}>
            <Grid item xs={12} md={6}>
              <MultipleFilesUpload
                onUpload={(filesMetaData: FilesMetaData[]) => {
                  setUploadedFrontFiles(filesMetaData);
                }}
                placeholder={UploadFileComponentConstants.FRONT_OF_CARD}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <MultipleFilesUpload
                onUpload={(filesMetaData: FilesMetaData[]) => {
                  setUploadedFrontFiles(filesMetaData);
                }}
                placeholder={UploadFileComponentConstants.BACK_OF_CARD}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
