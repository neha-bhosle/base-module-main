import { Box, Grid } from "@mui/material";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import {
  FeeScheduleFormLabels,
  FeeScheduleFormPlaceholders,
  SettingsFormConstants,
} from "../../../../../constants/formConst";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FeeScheduleSchema } from "./fee-schedule-schema";

interface AddFeeScheduleDialogProps {
  handleClose: () => void;
}

const AddFeeScheduleDialog = ({ handleClose }: AddFeeScheduleDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      procedureCode: "",
      rate: "",
      codeType: "",
    },
    resolver: yupResolver(FeeScheduleSchema),
  });

  const codeTypeOptions = [{ value: "CPT", label: "CPT" }];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomLabel
              label={FeeScheduleFormLabels.PROCEDURE_CODE}
              isRequired={true}
            />
            <Controller
              control={control}
              name="procedureCode"
              render={({ field }) => (
                <CustomSelect
                  placeholder={
                    FeeScheduleFormPlaceholders.SELECT_PROCEDURE_CODE
                  }
                  {...field}
                  value={field.value || ""}
                  items={[
                    { value: "99088", label: "Nausea" },
                    { value: "99077", label: "Parkinsons" },
                  ]}
                  hasError={!!errors.procedureCode}
                  errorMessage={errors.procedureCode?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={FeeScheduleFormLabels.RATE} isRequired={true} />
            <Controller
              control={control}
              name="rate"
              render={({ field }) => (
                <CustomInput
                  placeholder={FeeScheduleFormPlaceholders.ENTER_RATE}
                  {...field}
                  hasError={!!errors.rate}
                  errorMessage={errors.rate?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel
              label={FeeScheduleFormLabels.CODE_TYPE}
              isRequired={true}
            />
            <Controller
              control={control}
              name="codeType"
              render={({ field }) => (
                <CustomSelect
                  placeholder={FeeScheduleFormPlaceholders.SELECT_CODE_TYPE}
                  {...field}
                  value={field.value || ""}
                  items={codeTypeOptions}
                  hasError={!!errors.codeType}
                  errorMessage={errors.codeType?.message}
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
                label={SettingsFormConstants.CANCEL}
                isSubmitButton
                onClick={handleClose}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label={SettingsFormConstants.SAVE}
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

export default AddFeeScheduleDialog;
