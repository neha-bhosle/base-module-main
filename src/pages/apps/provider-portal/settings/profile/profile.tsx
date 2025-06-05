import { Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import doctorProfileImg from "../../../../../assets/images/Practice Easily Logo.svg";
import { ProfileFieldLabels } from "../../../../../constants/formConst";
import { ProfileTypographyVariants } from "../../../../../constants/typography-variants";
import { getAllPracticeDetails } from "../../../../../redux/auth/profile/get-profile-reducer";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { ProfilePayload } from "../../../../../models/all-const";

interface FieldData {
  label: string;
  value: string;
}

interface Address {
  uuid?: string;
  line1: string;
  line2?: string | null;
  city: string;
  state: string;
  zipcode: string;
}

const formatAddress = (address: Address | string): string => {
  if (typeof address === "string") return address;

  const parts = [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.zipcode,
  ].filter(Boolean);

  return parts.join(", ");
};

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [leftColumnFields, setLeftColumnFields] = useState<FieldData[]>([]);
  const [rightColumnFields, setRightColumnFields] = useState<FieldData[]>([]);

  const { data: getAllPracticeDetailData } = useSelector(
    (state: RootState) => state.GetAllPracticeDetailsReducer
  );

  useEffect(() => {
    // Fetch practice details when component mounts
    dispatch(getAllPracticeDetails());
  }, [dispatch]);

  useEffect(() => {
    if (getAllPracticeDetailData) {
      const profileData = getAllPracticeDetailData as unknown as ProfilePayload;
      setLeftColumnFields([
        {
          label: ProfileFieldLabels.CLINIC_NPI_NUMBER,
          value: profileData.npiNumber,
        },
        {
          label: ProfileFieldLabels.TAX_NUMBER,
          value: `${profileData.taxNumber}  (${profileData.taxType})`,
        },
        {
          label: ProfileFieldLabels.CONTACT_NUMBER,
          value: profileData.contactNumber,
        },
      ]);

      setRightColumnFields([
        {
          label: ProfileFieldLabels.EMAIL_ID,
          value: profileData.emailId,
        },
        {
          label: ProfileFieldLabels.TAXONOMY_CODE,
          value: profileData.taxonomy,
        },
        {
          label: ProfileFieldLabels.ADDRESS,
          value: formatAddress(profileData.address),
        },
      ]);
    }
  }, [getAllPracticeDetailData]);

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 1,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        width: "100%",
      }}
    >
      <Grid display={"flex"} flexDirection={"row"} gap={2}>
        <Grid item xs={12} md={3}>
          <Grid
            component="img"
            src={doctorProfileImg}
            alt="Practice building"
            sx={{
              width: "17vw",
              maxHeight: "19vh",
              objectFit: "cover",
              borderRadius: 1,
              mt: 1.5,
            }}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          display={"flex"}
          flexDirection={"column"}
          mt={"1px"}
          ml={1}
        >
          <Grid ml={5}>
            <Typography
              variant={ProfileTypographyVariants.TITLE_MEDIUM_PROFILE_BOLD}
            >
              {getAllPracticeDetailData &&
                (getAllPracticeDetailData as unknown as ProfilePayload)
                  .clinicName}
            </Typography>
          </Grid>
          <Grid display={"flex"} flexDirection={"row"}>
            <Grid
              width={"20vw"}
              ml={5}
              mt={2}
              display={"flex"}
              flexDirection={"column"}
              gap={3.5}
            >
              {leftColumnFields.map((field, index) => (
                <Grid
                  key={index}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={5}
                  width={"100%"}
                >
                  <Grid xs={6}>
                    <Typography
                      variant={
                        ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                      }
                    >
                      {field.label}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography
                      variant={
                        ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                      }
                    >
                      {field.value}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid
              width={"40vw"}
              display={"flex"}
              flexDirection={"column"}
              gap={3.5}
              mt={2}
              ml={15}
            >
              {rightColumnFields.map((field, index) => (
                <Grid
                  key={index}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                >
                  <Grid xs={2}>
                    <Typography
                      variant={
                        ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY
                      }
                    >
                      {field.label}
                    </Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography
                      variant={
                        ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                      }
                    >
                      {field.value}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
