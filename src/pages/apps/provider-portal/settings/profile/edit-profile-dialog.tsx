import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import CustomContactInput from "../../../../../common-components/custom-contact-input/custom-contact-field";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import { AlertSeverity } from "../../../../../common-components/snackbar-alert/snackbar-alert";
import {
  SettingsFormLabels,
  SettingsFormPlaceholders,
} from "../../../../../constants/formConst";
import { apiStatus } from "../../../../../models/apiStatus";
import { loaderAction } from "../../../../../redux/auth/loaderReducer";
import {
  editPractice,
  editPracticeReducerAction,
} from "../../../../../redux/auth/profile/edit-practice-reducer";
import { getAllAmericanStates } from "../../../../../redux/auth/profile/get-all-states-reducer";
import { getAllPracticeDetails } from "../../../../../redux/auth/profile/get-profile-reducer";
import { snackbarAction } from "../../../../../redux/auth/snackbarReducer";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { EditProfileSchema } from "../profile/edit-profile-schema";

interface EditProfileDialogProps {
  handleClose: () => void;
  profileData: any; // TODO: Add proper type
}

const EditProfileDialog = ({
  handleClose,
  profileData,
}: EditProfileDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      clinicName: profileData?.clinicName || "",
      npiNumber: profileData?.npiNumber || "",
      taxType: profileData?.taxType || "",
      taxNumber: profileData?.taxNumber || "",
      contactNumber: profileData?.contactNumber || "",
      emailId: profileData?.emailId || "",
      taxonomy: profileData?.taxonomy || "",
      line1: profileData?.address?.line1 || "",
      line2: profileData?.address?.line2 || "",
      city: profileData?.address?.city || "",
      state: profileData?.address?.state || "",
      zip: profileData?.address?.zipcode || "",
    },
    resolver: yupResolver(EditProfileSchema),
  });

  const {
    // data: editPracticeResponse,
    status: editPracticeStatus,
    error: editPracticeError,
  }: any = useSelector((state: RootState) => state.EditPracticeReducer);

  const dispatch = useDispatch<AppDispatch>();

  const {
    data: getAllAmericanStatesData,
    status: getAllAmericanStatesStatus,
  }: any = useSelector((state: RootState) => state.GetAllAmericanStatesReducer);

  const stateOptions =
    getAllAmericanStatesData?.map((state: string) => ({
      value: state,
      label: state,
    })) || [];

  const taxTypeOptions = [
    { value: "TIN", label: "TIN" },
    { value: "SSN", label: "SSN" },
    { value: "EIN", label: "EIN" },
  ];

  useEffect(() => {
    dispatch(getAllAmericanStates());
  }, [dispatch]);

  useEffect(() => {}, [getAllAmericanStatesStatus, getAllAmericanStatesData]);

  // const handleSetImage = (file: File) => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProfileImage(reader.result as string);
  //   };
  //   reader.readAsDataURL(file);
  // };

  const onSubmit = (values: any) => {
    const payload = {
      ...values,
      uuid: profileData?.uuid,
      clinicName: values.clinicName,
      npiNumber: values.npiNumber,
      taxType: values.taxType,
      taxNumber: values.taxNumber,
      contactNumber: values.contactNumber,
      emailId: values.emailId,
      taxonomy: values.taxonomy,
      address: {
        line1: values.line1,
        line2: values.line2,
        city: values.city,
        state: values.state,
        zipcode: values.zip,
      },
    };
    dispatch(editPractice(payload));
  };

  // const [, setProfileImage] = useState<string | null>(
  //   profileData?.profileImage || null
  // );

  useEffect(() => {
    switch (editPracticeStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Practice updated successfully",
          })
        );
        dispatch(getAllPracticeDetails());
        dispatch(editPracticeReducerAction.resetEditPracticeReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: editPracticeError,
          })
        );
        break;
    }
  }, [editPracticeStatus, dispatch, editPracticeError, handleClose]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1.5}>
          <Grid item xs={12} ml={1} borderRadius={2} mt={2}>
            <Grid mb={2}>
              {" "}
              <Typography variant="bodyMedium3">
                {SettingsFormLabels.PRACTICE_INFORMATION}
              </Typography>
            </Grid>
            <Grid container spacing={2} width={"100%"}>
              {/* <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <UploadImage
                    size={210}
                    initialImage={profileImage as string}
                    onImageChange={handleSetImage}
                  />
                  <Typography
                    variant="bodyRegular6"
                    sx={{ color: "#666", textAlign: "center" }}
                  >
                    {SettingsFormMessages.MAX_FILE_SIZE}
                  </Typography>
                  <Typography
                    variant="bodyRegular6"
                    sx={{ color: "#666", textAlign: "center" }}
                  >
                    {SettingsFormMessages.SUPPORTED_FILES}
                  </Typography>
                </Box>
              </Grid> */}

              <Grid item xs={12} width={"100%"}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CustomLabel
                      label={SettingsFormLabels.CLINIC_NAME}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="clinicName"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_CLINIC_NAME
                          }
                          {...field}
                          hasError={!!errors.clinicName}
                          errorMessage={errors.clinicName?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel
                      label={SettingsFormLabels.CLINIC_NPI_NUMBER}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="npiNumber"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_CLINIC_NPI_NUMBER
                          }
                          {...field}
                          hasError={!!errors.npiNumber}
                          errorMessage={errors.npiNumber?.message}
                          isNumeric={true}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel label={SettingsFormLabels.TAX_TYPE} />
                    <Controller
                      control={control}
                      name="taxType"
                      render={({ field }) => (
                        <CustomSelect
                          placeholder={SettingsFormPlaceholders.SELECT_TAX_TYPE}
                          {...field}
                          value={field.value || ""}
                          items={taxTypeOptions}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel label={SettingsFormLabels.TAX_NUMBER} />
                    <Controller
                      control={control}
                      name="taxNumber"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_TAX_NUMBER
                          }
                          {...field}
                          hasError={!!errors.taxNumber}
                          errorMessage={errors.taxNumber?.message}
                          isNumeric={true}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel
                      label={SettingsFormLabels.CONTACT_NUMBER}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="contactNumber"
                      render={({ field }) => (
                        <CustomContactInput
                          {...field}
                          hasError={!!errors.contactNumber}
                          errorMessage={errors.contactNumber?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel
                      label={SettingsFormLabels.EMAIL_ID}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="emailId"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={SettingsFormPlaceholders.ENTER_EMAIL_ID}
                          {...field}
                          hasError={!!errors.emailId}
                          errorMessage={errors.emailId?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel label={SettingsFormLabels.TAXONOMY} />
                    <Controller
                      control={control}
                      name="taxonomy"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={SettingsFormPlaceholders.ENTER_TAXONOMY}
                          {...field}
                          hasError={!!errors.taxonomy}
                          errorMessage={errors.taxonomy?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} ml={1} borderRadius={2} mt={2} mr={2}>
            <Grid mb={2}>
              {" "}
              <Typography variant="bodyMedium3">
                {SettingsFormLabels.BILLING_ADDRESS}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <CustomLabel
                    label={SettingsFormLabels.ADDRESS_LINE_1}
                    isRequired
                  />
                  <Controller
                    control={control}
                    name="line1"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={
                          SettingsFormPlaceholders.ENTER_ADDRESS_LINE_1
                        }
                        {...field}
                        hasError={!!errors.line1}
                        errorMessage={errors.line1?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomLabel label={SettingsFormLabels.ADDRESS_LINE_2} />
                  <Controller
                    control={control}
                    name="line2"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={
                          SettingsFormPlaceholders.ENTER_ADDRESS_LINE_2
                        }
                        {...field}
                        hasError={!!errors.line2}
                        errorMessage={errors.line2?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.CITY} isRequired />
                  <Controller
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={SettingsFormPlaceholders.ENTER_CITY}
                        {...field}
                        hasError={!!errors.city}
                        errorMessage={errors.city?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.STATE} isRequired />
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={SettingsFormPlaceholders.SELECT_STATE}
                        {...field}
                        hasError={!!errors.state}
                        errorMessage={errors.state?.message}
                        value={field.value || ""}
                        items={stateOptions}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.ZIP_CODE} isRequired />
                  <Controller
                    control={control}
                    name="zip"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={SettingsFormPlaceholders.ENTER_ZIP_CODE}
                        {...field}
                        hasError={!!errors.zip}
                        errorMessage={errors.zip?.message}
                        isNumeric={true}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          flexDirection={"row"}
          justifyContent={"flex-end"}
          mt={2}
          sx={{
            display: "flex",
            position: "absolute",
            bottom: "0",
            right: "0",

            width: "100%",
            borderTop: "1px solid #E7E7E7",
            paddingTop: 2,
          }}
        >
          <Grid
            display="flex"
            flexDirection={"row"}
            gap={3}
            sx={{ marginBottom: "1.5vh", marginRight: "1.5vw" }}
          >
            <Grid>
              <CustomButton
                variant="outline"
                label={SettingsFormLabels.CANCEL}
                isSubmitButton
                onClick={handleClose}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label={SettingsFormLabels.SAVE}
                type="submit"
                isSubmitButton
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditProfileDialog;
