import { Grid, Paper, Typography } from "@mui/material";
import doctorProfileImg from "../../../../../assets/images/hospital.jpg";
import CustomisedTable from "../../../../../common-components/table/table";
import { useEffect, useState } from "react";
import {
  locationTableHeaders,
  practiceData,
} from "../../../../../common-components/headers/all-headers";
import { locationTableData } from "../../../../../common-components/mock-data/all-mock-data";
import { ProfileFieldLabels } from "../../../../../constants/formConst";

const Location = () => {
  const [locationDataTable, setLocationDataTable] = useState<
    | Array<{
        locationName: string;
        contactNumber: string;
        email: string;
        groupNPI: string;
        fax: string;
        address: string;
        status: string;
        action: Array<{ label: string; route: string }>;
      }>
    | undefined
  >(undefined);

  useEffect(() => {
    setLocationDataTable(locationTableData);
  }, []);

  return (
    <Grid>
      <Paper
        sx={{
          p: 3,
          borderRadius: 1,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
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
              <Typography variant="titleMediumProfileBold">
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
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.CLINIC_NPI_NUMBER}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography variant="titleSmallProfileGreyLight">
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
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.TAX_TYPE}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography variant="titleSmallProfileGreyLight">
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
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.TAX_NUMBER}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography variant="titleSmallProfileGreyLight">
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
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.CONTACT_NUMBER}
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography variant="titleSmallProfileGreyLight">
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
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.EMAIL_ID}
                    </Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography variant="titleSmallProfileGreyLight">
                      {practiceData.emailID}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid display={"flex"} flexDirection={"row"} gap={2}>
                  <Grid xs={2}>
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.TAXONOMY_CODE}
                    </Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography variant="titleSmallProfileGreyLight">
                      {practiceData.taxonomyCode}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid display={"flex"} flexDirection={"row"} gap={2}>
                  <Grid xs={2}>
                    <Typography variant="titleSmallProfileGrey">
                      {ProfileFieldLabels.ADDRESS}
                    </Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography variant="titleSmallProfileGreyLight">
                      {practiceData.address}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid mt={2}>
        <CustomisedTable
          headCells={locationTableHeaders}
          tableData={locationDataTable}
          showPagination
          setHeight="39vh"
        />
      </Grid>
    </Grid>
  );
};

export default Location;
