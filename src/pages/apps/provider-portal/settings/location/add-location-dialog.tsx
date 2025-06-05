import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LocationPayload } from "src/models/all-const";
import { LocationInfo } from "src/models/providerGroup";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import CustomContactInput from "../../../../../common-components/custom-contact-input/custom-contact-field";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import { AlertSeverity } from "../../../../../common-components/snackbar-alert/snackbar-alert";
import {
  LocationFormLabels,
  LocationFormPlaceholders,
  SettingsFormPlaceholders,
} from "../../../../../constants/formConst";
import { apiStatus } from "../../../../../models/apiStatus";
import { loaderAction } from "../../../../../redux/auth/loaderReducer";
import {
  addPracticeLocation,
  addPracticeLocationReducerAction,
} from "../../../../../redux/auth/profile/add-practice-location-reducer";
import {
  editLocation,
  editLocationReducerAction,
} from "../../../../../redux/auth/profile/edit-location-reducer";
import { getAllAmericanStates } from "../../../../../redux/auth/profile/get-all-states-reducer";
import { getAllLocationDetails } from "../../../../../redux/auth/profile/get-location-details";
import { getLocationById } from "../../../../../redux/auth/profile/get-location-by-id-reducer";
import { snackbarAction } from "../../../../../redux/auth/snackbarReducer";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { LocationSchema } from "./location-schema";
interface LocationFormData {
  locationName: string;
  contactNumber: string;
  emailId: string;
  groupNpiNumber: string;
  status?: string;
  fax?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
}

interface AddLocationDialogProps {
  handleClose: () => void;
  isEdit?: boolean;
  selectedLocation?: any;
}

const AddLocationDialog = ({
  handleClose,
  isEdit,
  selectedLocation,
}: AddLocationDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<LocationFormData>({
    defaultValues: {
      locationName: "",
      contactNumber: "",
      emailId: "",
      groupNpiNumber: "",
      status: "",
      fax: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    resolver: yupResolver(LocationSchema),
  });

  const { status: addLocationStatus, error: addLocationError }: any =
    useSelector((state: RootState) => state.AddPracticeLocationReducer);

  const { status: editLocationStatus, error: editLocationError }: any =
    useSelector((state: RootState) => state.EditLocationReducer);

  const { data: locationData, status: locationStatus }: any = useSelector(
    (state: RootState) => state.GetLocationByIdReducer
  );

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllAmericanStates());

    // Fetch location data by ID if in edit mode
    if (isEdit && selectedLocation?.uuid) {
      dispatch(
        getLocationById({
          uuid: selectedLocation.uuid,
          xTenant: "default",
        } as LocationPayload)
      );
    }
  }, [dispatch, isEdit, selectedLocation]);

  // Use data from the GetLocationByIdReducer to populate form fields
  useEffect(() => {
    if (locationStatus === apiStatus.SUCCEEDED && locationData) {
      setValue("locationName", locationData.locationName || "");
      setValue("contactNumber", locationData.contactNumber || "");
      setValue("emailId", locationData.emailId || "");
      setValue("groupNpiNumber", locationData.groupNpiNumber || "");
      setValue("status", locationData.status === true ? "active" : "inactive");
      setValue("fax", locationData.fax || "");

      if (locationData.address) {
        setValue("addressLine1", locationData.address.line1 || "");
        setValue("addressLine2", locationData.address.line2 || "");
        setValue("city", locationData.address.city || "");
        setValue("state", locationData.address.state || "");
        setValue("zipCode", locationData.address.zipcode || "");
      }
    } else if (isEdit && selectedLocation) {
      // Fallback to using the selectedLocation prop directly if API call hasn't succeeded
      setValue("locationName", selectedLocation.locationName || "");
      setValue("contactNumber", selectedLocation.contactNumber || "");
      setValue("emailId", selectedLocation.emailId || "");
      setValue("groupNpiNumber", selectedLocation.groupNpiNumber || "");
      setValue(
        "status",
        selectedLocation.status === true ? "active" : "inactive"
      );
      setValue("fax", selectedLocation.fax || "");

      if (selectedLocation.address) {
        if (typeof selectedLocation.address === "object") {
          setValue("addressLine1", selectedLocation.address.line1 || "");
          setValue("addressLine2", selectedLocation.address.line2 || "");
          setValue("city", selectedLocation.address.city || "");
          setValue("state", selectedLocation.address.state || "");
          setValue("zipCode", selectedLocation.address.zipcode || "");
        } else {
          const addressParts = selectedLocation.address.split(", ");
          if (addressParts.length >= 4) {
            const [line1WithLine2, city, state, zipCode] = addressParts;
            if (line1WithLine2.includes(", ")) {
              const [line1, line2] = line1WithLine2.split(", ");
              setValue("addressLine1", line1);
              setValue("addressLine2", line2 || "");
            } else {
              setValue("addressLine1", line1WithLine2);
              setValue("addressLine2", "");
            }
            setValue("city", city);
            setValue("state", state);
            setValue("zipCode", zipCode);
          }
        }
      }
    }
  }, [isEdit, selectedLocation, setValue, locationData, locationStatus]);

  const onSubmit = (data: LocationFormData) => {
    const payload = {
      uuid: selectedLocation?.uuid,
      locationName: data.locationName,
      contactNumber: data.contactNumber,
      emailId: data.emailId,
      groupNpiNumber: data.groupNpiNumber,
      status: data.status == "active" ? true : false,
      fax: data.fax,
      address: {
        line1: data.addressLine1,
        line2: data.addressLine2,
        city: data.city,
        state: data.state,
        zipcode: data.zipCode,
      },
      size: 10,
      page: 0,
      searchString: "",
      xTenant: "default",
    };

    if (isEdit) {
      dispatch(editLocation(payload as unknown as LocationInfo));
    } else {
      dispatch(addPracticeLocation(payload as unknown as LocationInfo));
    }
  };

  const { data: getAllAmericanStatesData }: any = useSelector(
    (state: RootState) => state.GetAllAmericanStatesReducer
  );

  const stateOptions =
    getAllAmericanStatesData?.map((state: string) => ({
      value: state,
      label: state,
    })) || [];

  useEffect(() => {
    switch (addLocationStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Location added successfully",
          })
        );
        dispatch(
          getAllLocationDetails({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          } as LocationPayload)
        );
        dispatch(
          addPracticeLocationReducerAction.resetAddPracticeLocationReducer()
        );
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: addLocationError,
          })
        );
        break;
    }
  }, [addLocationStatus, dispatch, addLocationError, handleClose]);

  useEffect(() => {
    switch (editLocationStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Location updated successfully",
          })
        );
        dispatch(
          getAllLocationDetails({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          } as LocationPayload)
        );
        dispatch(editLocationReducerAction.resetEditLocationReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: editLocationError,
          })
        );
        break;
    }
  }, [editLocationStatus, dispatch, editLocationError, handleClose]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1.5}>
          <Grid item xs={12} borderRadius={2} mb={2}>
            <Grid mb={2}>
              <Typography variant="bodyMedium3">
                {LocationFormLabels.LOCATION_INFORMATION}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomLabel
                  label={LocationFormLabels.LOCATION_NAME}
                  isRequired
                />
                <Controller
                  control={control}
                  name="locationName"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_LOCATION_NAME}
                      {...field}
                      hasError={!!errors.locationName}
                      errorMessage={errors.locationName?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel
                  label={LocationFormLabels.CONTACT_NUMBER}
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
                <CustomLabel label={LocationFormLabels.EMAIL_ID} isRequired />
                <Controller
                  control={control}
                  name="emailId"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_EMAIL_ID}
                      {...field}
                      hasError={!!errors.emailId}
                      errorMessage={errors.emailId?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel
                  label={LocationFormLabels.GROUP_NPI_NUMBER}
                  isRequired
                />
                <Controller
                  control={control}
                  name="groupNpiNumber"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_GROUP_NPI_NUMBER
                      }
                      {...field}
                      hasError={!!errors.groupNpiNumber}
                      errorMessage={errors.groupNpiNumber?.message}
                      isNumeric={true}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.STATUS} />
                <Controller
                  control={control}
                  name="status"
                  render={({ field }) => (
                    <CustomSelect
                      placeholder={LocationFormPlaceholders.SELECT_STATUS}
                      {...field}
                      value={field.value || ""}
                      items={statusOptions}
                      hasError={!!errors.status}
                      errorMessage={errors.status?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.FAX} />
                <Controller
                  control={control}
                  name="fax"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_FAX}
                      {...field}
                      hasError={!!errors.fax}
                      errorMessage={errors.fax?.message}
                      isNumeric={true}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Physical Address Section */}
          <Grid item xs={12} borderRadius={2}>
            <Grid mb={2}>
              <Typography variant="bodyMedium3">
                {LocationFormLabels.PHYSICAL_ADDRESS}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomLabel
                  label={LocationFormLabels.ADDRESS_LINE_1}
                  isRequired
                />
                <Controller
                  control={control}
                  name="addressLine1"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_ADDRESS_LINE_1
                      }
                      {...field}
                      hasError={!!errors.addressLine1}
                      errorMessage={errors.addressLine1?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomLabel label={LocationFormLabels.ADDRESS_LINE_2} />
                <Controller
                  control={control}
                  name="addressLine2"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_ADDRESS_LINE_2
                      }
                      {...field}
                      hasError={!!errors.addressLine2}
                      errorMessage={errors.addressLine2?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.CITY} isRequired />
                <Controller
                  control={control}
                  name="city"
                  render={({ field }) => (
                    // <CustomSelect
                    //   placeholder={LocationFormPlaceholders.SELECT_CITY}
                    //   {...field}
                    //   value={field.value}
                    //   items={cityOptions}
                    //   hasError={!!errors.city}
                    //   errorMessage={errors.city?.message}
                    // />
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_CITY}
                      {...field}
                      hasError={!!errors.city}
                      errorMessage={errors.city?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.STATE} isRequired />
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
                <CustomLabel label={LocationFormLabels.ZIP_CODE} isRequired />
                <Controller
                  control={control}
                  name="zipCode"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_ZIP_CODE}
                      {...field}
                      hasError={!!errors.zipCode}
                      errorMessage={errors.zipCode?.message}
                      isNumeric={true}
                    />
                  )}
                />
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
                label="Cancel"
                isSubmitButton
                onClick={handleClose}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label="Save"
                type="submit"
                changePadding={false}
                isSubmitButton
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddLocationDialog;
