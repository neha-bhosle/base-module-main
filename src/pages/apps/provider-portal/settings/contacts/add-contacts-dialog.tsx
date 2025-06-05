import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AlertSeverity } from "../../../../../common-components/alert/alert";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import CustomContactInput from "../../../../../common-components/custom-contact-input/custom-contact-field";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
  SettingsFormPlaceholders,
} from "../../../../../constants/formConst";
import { apiStatus } from "../../../../../models/apiStatus";
import { loaderAction } from "../../../../../redux/auth/loaderReducer";
import {
  addContacts,
  addContactsReducerAction,
} from "../../../../../redux/auth/profile/add-contacts-reducer";
import {
  editContacts,
  editContactsReducerAction,
} from "../../../../../redux/auth/profile/edit-contacts-reducer";
import { getAllContacts } from "../../../../../redux/auth/profile/get-all-contacts-reducer";
import { getAllAmericanStates } from "../../../../../redux/auth/profile/get-all-states-reducer";
import { snackbarAction } from "../../../../../redux/auth/snackbarReducer";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { ContactsSchema } from "./contacts-schema";
import { ContactPayload } from "src/models/all-const";

interface AddContactsDialogProps {
  handleClose: () => void;
  isEdit?: boolean;
  selectedContact?: any;
}

const AddContactsDialog = ({
  handleClose,
  isEdit,
  selectedContact,
}: AddContactsDialogProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      contactType: "",
      fullName: "",
      contactNumber: "",
      faxNumber: "",
      emailId: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
    resolver: yupResolver(ContactsSchema),
  });

  const contactTypeOptions = [
    { value: "REFERRAL", label: "Referral" },
    { value: "LAB", label: "Lab" },
  ];

  const { data: getAllAmericanStatesData = [] }: any =
    useSelector((state: RootState) => state.GetAllAmericanStatesReducer) || {};

  useEffect(() => {
    dispatch(getAllAmericanStates());
  }, [dispatch]);

  const { status: addContactsStatus, error: addContactsError }: any =
    useSelector((state: RootState) => state.AddContactsReducer) || {};

  const { status: editContactsStatus, error: editContactsError }: any =
    useSelector((state: RootState) => state.EditContactsReducer) || {};

  const stateOptions =
    getAllAmericanStatesData?.map((state: string) => ({
      value: state,
      label: state,
    })) || [];

  useEffect(() => {
    if (isEdit && selectedContact) {
      // Use the original contact data for prepopulation
      const originalContact = selectedContact.originalContact;
      setValue("contactType", originalContact.contactType);
      setValue("fullName", originalContact.name);
      setValue("contactNumber", originalContact.contactNumber);
      setValue("faxNumber", originalContact.faxNumber);
      setValue("emailId", originalContact.emailId);

      // Handle address from the original contact data
      const address = originalContact.address;
      if (address) {
        setValue("address", address.line1);
        setValue("city", address.city);
        setValue("state", address.state);
        setValue("zipCode", address.zipcode);
      }
    }
  }, [isEdit, selectedContact, setValue]);

  const onSubmit = (data: any) => {
    const payload = {
      uuid: isEdit ? selectedContact?.originalContact?.uuid : undefined,
      contactType: data?.contactType,
      name: data?.fullName,
      contactNumber: data?.contactNumber,
      faxNumber: data?.faxNumber,
      emailId: data?.emailId,
      address: {
        line1: data?.address,
        city: data?.city,
        state: data?.state,
        zipcode: data?.zipCode,
      },
      size: 10,
      page: 0,
      searchString: "",
      xTenant: "default",
    };
    if (isEdit) {
      dispatch(editContacts(payload as any));
    } else {
      dispatch(addContacts(payload as any));
    }
  };

  useEffect(() => {
    switch (addContactsStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Contact added successfully",
          })
        );
        dispatch(
          getAllContacts({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          } as ContactPayload)
        );
        dispatch(addContactsReducerAction.resetAddContactsReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: addContactsError,
          })
        );
        break;
    }
  }, [addContactsStatus, dispatch, addContactsError, handleClose]);

  useEffect(() => {
    switch (editContactsStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Contact updated successfully",
          })
        );
        dispatch(
          getAllContacts({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          } as ContactPayload)
        );
        dispatch(editContactsReducerAction.resetEditContactsReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: editContactsError,
          })
        );
        break;
    }
  }, [editContactsStatus, dispatch, editContactsError, handleClose]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomLabel label={ContactFormLabels.CONTACT_TYPE} isRequired />
            <Controller
              control={control}
              name="contactType"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ContactFormPlaceholders.SELECT_TYPE}
                  {...field}
                  value={field.value}
                  items={contactTypeOptions}
                  hasError={!!errors.contactType}
                  errorMessage={errors.contactType?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomLabel label={ContactFormLabels.FULL_NAME} isRequired />
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_FULL_NAME}
                  {...field}
                  hasError={!!errors.fullName}
                  errorMessage={errors.fullName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.CONTACT_NUMBER} isRequired />
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
            <CustomLabel label={ContactFormLabels.FAX_NUMBER} />
            <Controller
              control={control}
              name="faxNumber"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_FAX_NUMBER}
                  {...field}
                  hasError={!!errors.faxNumber}
                  errorMessage={errors.faxNumber?.message}
                  isNumeric={true}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.EMAIL_ID} isRequired />
            <Controller
              control={control}
              name="emailId"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_EMAIL_ID}
                  {...field}
                  hasError={!!errors.emailId}
                  errorMessage={errors.emailId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={ContactFormLabels.ADDRESS} isRequired />
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_ADDRESS}
                  {...field}
                  hasError={!!errors.address}
                  errorMessage={errors.address?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.CITY} isRequired />
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.SELECT_CITY}
                  {...field}
                  hasError={!!errors.city}
                  errorMessage={errors.city?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.STATE} isRequired />
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
            <CustomLabel label={ContactFormLabels.ZIP_CODE} isRequired />
            <Controller
              control={control}
              name="zipCode"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_ZIP_CODE}
                  {...field}
                  hasError={!!errors.zipCode}
                  errorMessage={errors.zipCode?.message}
                  isNumeric={true}
                />
              )}
            />
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

export default AddContactsDialog;
