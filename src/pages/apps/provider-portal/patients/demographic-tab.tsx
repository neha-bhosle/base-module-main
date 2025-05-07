import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import CustomInput from "../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import ImageUpload from "../../../../common-components/image-upload/image-upload";
import CustomDatePicker from "../../../../common-components/custom-date-picker/custom-date-picker";

interface FormData {
  profileImage?: File | null;
  firstName: string;
  middleName?: string;
  lastName: string;
  preferredName?: string;
  dateOfBirth: string;
  legalSex?: string;
  genderIdentity?: string;
  emailId: string;
  phoneNumber: string;
  ethnicity?: string;
  race?: string;
  preferredLanguage?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipcode: string;
  emergencyName?: string;
  emergencyPhone?: string;
  relationship?: string;
  isResponsibleParty?: boolean;
}

interface DemographicTabProps {
  onNext: () => void;
}

const schema = yup.object().shape({
  profileImage: yup.mixed().nullable().optional(),
  firstName: yup.string().required("First name is required"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("Last name is required"),
  preferredName: yup.string().optional(),
  dateOfBirth: yup.string().required("Date of birth is required"),
  legalSex: yup.string().optional(),
  genderIdentity: yup.string().optional(),
  phoneNumber: yup.string().required("Phone number is required"),
  emailId: yup.string().email("Invalid email").required("Email is required"),
  ethnicity: yup.string().optional(),
  race: yup.string().optional(),
  preferredLanguage: yup.string().optional(),
  addressLine1: yup.string().required("Address Line 1 is required"),
  addressLine2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipcode: yup.string().required("Zipcode is required"),
  emergencyName: yup.string().optional(),
  emergencyPhone: yup.string().optional(),
  relationship: yup.string().optional(),
  isResponsibleParty: yup.boolean().optional(),
}) as yup.ObjectSchema<FormData>;

const DemographicTab = ({ onNext }: DemographicTabProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      profileImage: null,
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      dateOfBirth: "",
      legalSex: "",
      genderIdentity: "",
      emailId: "",
      phoneNumber: "",
      ethnicity: "",
      race: "",
      preferredLanguage: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
      emergencyName: "",
      emergencyPhone: "",
      relationship: "",
      isResponsibleParty: false,
    },
    resolver: yupResolver(schema),
  });

  const handleImageChange = (file: File) => {
    setValue("profileImage", file);
  };

  const onSubmit = () => {
    onNext();
  };

  return (
    <Grid>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"#F5F5F5"}
        p={1}
        borderRadius={2}
        mb={2}
      >
        <Grid>
          <Typography variant="bodyMedium4">Patient Information</Typography>
        </Grid>
        <Grid mr={2}>
          <KeyboardArrowUpOutlinedIcon />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid bgcolor={"#FFFFFF"} borderRadius={2}>
          <Grid container border="1px solid #E0E0E0" p={2} borderRadius={2}>
            <Grid
              item
              xs={12}
              md={1.5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ImageUpload
                initialImage="/src/assets/images/avatar.png"
                onImageChange={handleImageChange}
                size={150}
              />
            </Grid>

            <Grid item xs={12} md={10.5} pl={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <CustomLabel label="First Name" isRequired />
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter First Name"
                        {...field}
                        hasError={!!errors.firstName}
                        errorMessage={errors.firstName?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Middle Name" />
                  <Controller
                    control={control}
                    name="middleName"
                    render={({ field }) => (
                      <CustomInput placeholder="Enter Middle Name" {...field} />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Last Name" isRequired />
                  <Controller
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Last Name"
                        {...field}
                        hasError={!!errors.lastName}
                        errorMessage={errors.lastName?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Preferred Name" />
                  <Controller
                    control={control}
                    name="preferredName"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Preferred Name"
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Date of Birth" isRequired />
                  <Controller
                    control={control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <CustomDatePicker
                        placeholder="Select Date"
                        value={field.value}
                        handleDateChange={field.onChange}
                        hasError={!!errors.dateOfBirth}
                        errorMessage={errors.dateOfBirth?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Legal Sex" />
                  <Controller
                    control={control}
                    name="legalSex"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select Legal Sex"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Gender Identity" />
                  <Controller
                    control={control}
                    name="genderIdentity"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select Gender Identity"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                          { value: "non_binary", label: "Non-binary" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Email ID" isRequired />
                  <Controller
                    control={control}
                    name="emailId"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Email ID"
                        {...field}
                        hasError={!!errors.emailId}
                        errorMessage={errors.emailId?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Phone Number" isRequired />
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Phone Number"
                        {...field}
                        hasError={!!errors.phoneNumber}
                        errorMessage={errors.phoneNumber?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Ethnicity" />
                  <Controller
                    control={control}
                    name="ethnicity"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select Ethnicity"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "hispanic", label: "Hispanic" },
                          { value: "non_hispanic", label: "Non-Hispanic" },
                        ]}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Race" />
                  <Controller
                    control={control}
                    name="race"
                    render={({ field }) => (
                      <CustomInput placeholder="Enter Race" {...field} />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <CustomLabel label="Preferred Language" />
                  <Controller
                    control={control}
                    name="preferredLanguage"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select Preferred Language"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "english", label: "English" },
                          { value: "spanish", label: "Spanish" },
                          { value: "french", label: "French" },
                        ]}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  display={"flex"}
                  gap={2}
                  flexDirection={"row"}
                >
                  <Grid item xs={12} md={6}>
                    <CustomLabel label="Address Line 1" isRequired />
                    <Controller
                      control={control}
                      name="addressLine1"
                      render={({ field }) => (
                        <CustomInput
                          placeholder="Enter Address Line 1"
                          {...field}
                          hasError={!!errors.addressLine1}
                          errorMessage={errors.addressLine1?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <CustomLabel label="Address Line 2" />
                    <Controller
                      control={control}
                      name="addressLine2"
                      render={({ field }) => (
                        <CustomInput
                          placeholder="Enter Address Line 2"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label="City" isRequired />
                  <Controller
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter City"
                        {...field}
                        hasError={!!errors.city}
                        errorMessage={errors.city?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label="State" isRequired />
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select State"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "ny", label: "New York" },
                          { value: "ca", label: "California" },
                        ]}
                        hasError={!!errors.state}
                        errorMessage={errors.state?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label="Zipcode" isRequired />
                  <Controller
                    control={control}
                    name="zipcode"
                    render={({ field }) => (
                      <CustomInput
                        placeholder="Enter Zipcode"
                        {...field}
                        hasError={!!errors.zipcode}
                        errorMessage={errors.zipcode?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">
              Emergency Contact Information
            </Typography>
          </Grid>
          <Grid mr={2}>
            <KeyboardArrowUpOutlinedIcon />
          </Grid>
        </Grid>

        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CustomLabel label="Name" />
              <Controller
                control={control}
                name="emergencyName"
                render={({ field }) => (
                  <CustomInput placeholder="Enter Name" {...field} />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CustomLabel label="Phone Number" />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => (
                  <CustomInput placeholder="Enter Phone Number" {...field} />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={9}>
                  <CustomLabel label="Relationship with Patient" />
                  <Controller
                    control={control}
                    name="relationship"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select Relationship"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "spouse", label: "Spouse" },
                          { value: "parent", label: "Parent" },
                          { value: "child", label: "Child" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={3}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <FormControlLabel
                    control={
                      <Controller
                        name="isResponsibleParty"
                        control={control}
                        render={({ field }) => (
                          <Checkbox {...field} checked={field.value} />
                        )}
                      />
                    }
                    label="Responsible Party"
                    sx={{
                      whiteSpace: "nowrap",
                      mt: 3,
                      "& .MuiFormControlLabel-label": {
                        whiteSpace: "nowrap",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">Guardian Information</Typography>
          </Grid>
          <Grid mr={2} display={"flex"} flexDirection={"row"} gap={2}>
            <Grid display={"flex"} flexDirection={"row"} gap={2}>
              <Grid item xs={3} width={"100%"}>
                <FormControlLabel
                  control={
                    <Controller
                      name="isResponsibleParty"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value} />
                      )}
                    />
                  }
                  label="Same as Emergency Contact"
                />
              </Grid>
            </Grid>
            <Grid>
              <KeyboardArrowUpOutlinedIcon />
            </Grid>
          </Grid>
        </Grid>

        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CustomLabel label="Name" />
              <Controller
                control={control}
                name="emergencyName"
                render={({ field }) => (
                  <CustomInput placeholder="Enter Name" {...field} />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CustomLabel label="Phone Number" />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => (
                  <CustomInput placeholder="Enter Phone Number" {...field} />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={9}>
                  <CustomLabel label="Relationship with Patient" />
                  <Controller
                    control={control}
                    name="relationship"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder="Select Relationship"
                        {...field}
                        value={field.value || ""}
                        items={[
                          { value: "spouse", label: "Spouse" },
                          { value: "parent", label: "Parent" },
                          { value: "child", label: "Child" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={3} width={"100%"}>
                  <FormControlLabel
                    control={
                      <Controller
                        name="isResponsibleParty"
                        control={control}
                        render={({ field }) => (
                          <Checkbox {...field} checked={field.value} />
                        )}
                      />
                    }
                    label="Responsible Party"
                    sx={{
                      whiteSpace: "nowrap",
                      mt: 3,
                      "& .MuiFormControlLabel-label": {
                        whiteSpace: "nowrap",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">Clinician Information</Typography>
          </Grid>
          <Grid mr={2}>
            <KeyboardArrowUpOutlinedIcon />
          </Grid>
        </Grid>
        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CustomLabel label="Primary Clinician" />
              <Controller
                control={control}
                name="emergencyName"
                render={({ field }) => (
                  <CustomSelect
                    items={[]}
                    placeholder="Select Primary Clinician"
                    {...field}
                    value={field.value || ""}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CustomLabel label="Secondary Clinician" />
              <Controller
                control={control}
                name="emergencyPhone"
                render={({ field }) => (
                  <CustomSelect
                    items={[]}
                    placeholder="Select Secondary Clinician"
                    {...field}
                    value={field.value || ""}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"#F5F5F5"}
          p={1}
          borderRadius={2}
          mb={2}
          mt={2}
        >
          <Grid>
            <Typography variant="bodyMedium4">Privacy Consent</Typography>
          </Grid>
          <Grid mr={2}>
            <KeyboardArrowUpOutlinedIcon />
          </Grid>
        </Grid>
        <Grid border="1px solid #E0E0E0" p={2} borderRadius={2} mb={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Grid
                item
                xs={3}
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <FormControlLabel
                  control={
                    <Controller
                      name="isResponsibleParty"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value} />
                      )}
                    />
                  }
                  label="Phone Appointment Reminders"
                  sx={{
                    whiteSpace: "nowrap",

                    "& .MuiFormControlLabel-label": {
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
              <Grid
                item
                xs={3}
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <FormControlLabel
                  control={
                    <Controller
                      name="isResponsibleParty"
                      control={control}
                      render={({ field }) => (
                        <Checkbox {...field} checked={field.value} />
                      )}
                    />
                  }
                  label="Email Appointment Reminders"
                  sx={{
                    whiteSpace: "nowrap",

                    "& .MuiFormControlLabel-label": {
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "white",
            padding: "16px 24px",
            borderTop: "1px solid #E0E0E0",
            boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          <CustomButton variant="outline" label="Cancel" isSubmitButton />
          <CustomButton
            variant="filled"
            label="Save & Next"
            type="submit"
            changePadding={false}
          />
        </Grid>
      </form>
    </Grid>
  );
};

export default DemographicTab;
