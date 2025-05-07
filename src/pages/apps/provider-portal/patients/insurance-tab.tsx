import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import { PatientFormButtons } from "../../../../constants/formConst";
import { AddPatientInsuranceSchema } from "./add-patients-schema";
import { InsuranceForm } from "./insurance-form";

export interface FormData {
  paymentMethod: string;
  insuranceName?: string;
  memberId?: string;
  groupId?: string;
  patientRelationship?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
}

const InsuranceTab = () => {
  const [showSecondaryInsurance, setShowSecondaryInsurance] = useState(false);

  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      paymentMethod: "",
      insuranceName: "",
      memberId: "",
      groupId: "",
      patientRelationship: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    } as FormData,
    resolver: yupResolver<FormData>(AddPatientInsuranceSchema),
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        overflow: "auto",
        paddingBottom: "6 0px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
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
              <Typography variant="bodyMedium4">Payment Method</Typography>
            </Grid>
            <Grid mr={2}>
              <KeyboardArrowUpOutlinedIcon />
            </Grid>
          </Grid>

          <Grid bgcolor={"#FFFFFF"} borderRadius={2} mb={2}>
            <Grid container border="1px solid #E0E0E0" p={0.5} borderRadius={2}>
              <Controller
                control={control}
                name="paymentMethod"
                render={({ field }) => (
                  <RadioGroup row {...field} sx={{ gap: 4, marginLeft: 1 }}>
                    <FormControlLabel
                      value="self-pay"
                      control={<Radio />}
                      label="Self Pay"
                    />
                    <FormControlLabel
                      value="insurance"
                      control={<Radio />}
                      label="Insurance"
                    />
                  </RadioGroup>
                )}
              />
            </Grid>
          </Grid>

          {paymentMethod === "insurance" && (
            <>
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
                  <Typography variant="bodyMedium4">
                    Primary Insurance
                  </Typography>
                </Grid>
                <Grid mr={2}>
                  <KeyboardArrowUpOutlinedIcon />
                </Grid>
              </Grid>

              <Box mb={2}>
                <InsuranceForm errors={errors} control={control} />
              </Box>

              <Box
                sx={{
                  cursor: "pointer",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() =>
                  setShowSecondaryInsurance(!showSecondaryInsurance)
                }
              >
                <Typography
                  variant="bodyMedium4"
                  sx={{
                    color: "#145DA0",
                    textDecoration: "underline",
                  }}
                >
                  {showSecondaryInsurance
                    ? "Remove Secondary Insurance"
                    : "Add Secondary Insurance"}
                </Typography>
              </Box>

              {showSecondaryInsurance && (
                <Box>
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
                      <Typography variant="bodyMedium4">
                        Secondary Insurance
                      </Typography>
                    </Grid>
                    <Grid mr={2}>
                      <KeyboardArrowUpOutlinedIcon />
                    </Grid>
                  </Grid>

                  <InsuranceForm errors={errors} control={control} />
                </Box>
              )}
            </>
          )}
        </Box>

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "background.paper",
            borderTop: "1px solid #E0E0E0",
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            zIndex: 1000,
            boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          <CustomButton
            variant="outline"
            label={PatientFormButtons.CANCEL}
            isSubmitButton
          />
          <CustomButton
            variant="filled"
            label={PatientFormButtons.SAVE}
            type="submit"
            changePadding={false}
          />
        </Box>
      </form>
    </Box>
  );
};

export default InsuranceTab;
