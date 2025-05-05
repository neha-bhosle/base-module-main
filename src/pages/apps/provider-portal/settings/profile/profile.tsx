import { Grid, Paper, Typography } from "@mui/material";
import { practiceData } from "../../../../../common-components/mock-data/all-mock-data";
import doctorProfileImg from "../../../../../assets/images/hospital.jpg";
import { ProfileTypographyVariants } from "../../../../../constants/typography-variants";
import { ProfileFieldLabels } from "../../../../../constants/formConst";

const Profile = () => {
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
              {ProfileFieldLabels.PRACTICE_NAME}
            </Typography>
          </Grid>
          <Grid display={"flex"} flexDirection={"row"}>
            <Grid
              width={"20vw"}
              ml={5}
              mt={2}
              display={"flex"}
              flexDirection={"column"}
              gap={2.5}
            >
              <Grid display={"flex"} flexDirection={"row"} gap={5}>
                <Grid xs={6}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.CLINIC_NPI_NUMBER}
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.clinicNPI}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                display={"flex"}
                flexDirection={"row"}
                gap={5}
                width={"100%"}
              >
                <Grid xs={6}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.TAX_TYPE}
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.taxType}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                display={"flex"}
                flexDirection={"row"}
                gap={5}
                width={"100%"}
              >
                <Grid xs={6}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.TAX_NUMBER}
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.taxNumber}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                display={"flex"}
                flexDirection={"row"}
                gap={5}
                width={"100%"}
              >
                <Grid xs={6}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.CONTACT_NUMBER}
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.contactNumber}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              width={"40vw"}
              display={"flex"}
              flexDirection={"column"}
              gap={3.5}
              mt={2}
              ml={15}
            >
              <Grid display={"flex"} flexDirection={"row"} gap={3}>
                <Grid xs={2}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.EMAIL_ID}
                  </Typography>
                </Grid>
                <Grid xs={10}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.emailID}
                  </Typography>
                </Grid>
              </Grid>

              <Grid display={"flex"} flexDirection={"row"} gap={2}>
                <Grid xs={2}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.TAXONOMY_CODE}
                  </Typography>
                </Grid>
                <Grid xs={10}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.taxonomyCode}
                  </Typography>
                </Grid>
              </Grid>

              <Grid display={"flex"} flexDirection={"row"} gap={2}>
                <Grid xs={2}>
                  <Typography
                    variant={ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY}
                  >
                    {ProfileFieldLabels.ADDRESS}
                  </Typography>
                </Grid>
                <Grid xs={10}>
                  <Typography
                    variant={
                      ProfileTypographyVariants.TITLE_SMALL_PROFILE_GREY_LIGHT
                    }
                  >
                    {practiceData.address}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
