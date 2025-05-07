import React, { useState } from "react";
import DemographicTab from "./demographic-tab";
import InsuranceTab from "./insurance-tab";
import { Tab, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useNavigate } from "react-router-dom";
export const tabStyles = {
  "& .MuiTabs-indicator": {
    backgroundColor: "#145DA0",
  },
  "& .MuiTab-root": {
    textTransform: "capitalize",
  },
};

interface TabData {
  label: string;
  value: string;
  component: React.ReactNode;
  completed: boolean;
}

const AddPatients = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const navigate = useNavigate();
  const useStyles = {
    indicator: {
      "&.Mui-selected": {
        background: "#EAF3FC !important",
      },
      "&.Mui-selected .MuiTab-iconWrapper": {
        width: "24px",
        height: "24px",
        borderRadius: "16px",
        gap: "4px",
        background: "#D5E4F3 !important",
        marginBottom: "0px !important",
      },
      "& .MuiTab-iconWrapper": {
        width: "24px",
        height: "24px",
        borderRadius: "16px",
        gap: "4px",
        marginBottom: "0px !important",
      },
      "&.Mui-disabled": {
        color: "#727272 !important",
      },
    },
  };

  const handleDemographicTabNext = (nextTab: string) => {
    setCurrentTab(nextTab);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const handleBackClick = () => {
    navigate("/admin/patients");
  };

  const tabsData: TabData[] = [
    {
      label: "Demographic",
      value: "1",
      component: (
        <DemographicTab onNext={() => handleDemographicTabNext("2")} />
      ),
      completed: currentTab > "1",
    },

    {
      label: "Insurance",
      value: "2",
      component: <InsuranceTab />,
      completed: currentTab > "2",
    },
  ];

  return (
    <Grid
      bgcolor={"#FFFFFF"}
      borderRadius={2}
      height={"83vh"}
      mb={5}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#D2D2D2",
          borderRadius: "3px",
        },
      }}
    >
      <Grid
        display={"flex"}
        gap={2}
        flexDirection={"row"}
        pb={2}
        borderBottom={"1px solid #E0E0E0"}
      >
        <Grid display={"flex"} gap={2} flexDirection={"row"} mt={2} ml={2}>
          <Grid>
            {" "}
            <WestOutlinedIcon
              onClick={handleBackClick}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid>
            <Typography variant="bodySemiBold2">Add Patient</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <TabContext value={currentTab}>
          <TabList
            onChange={handleTabChange}
            aria-label="Intake Form Tabs"
            variant="fullWidth"
            sx={{
              ...tabStyles,
              borderBottom: "1px solid #D2D2D2",
              height: "48px",
              minHeight: "48px",
              margin: "15px 25px",
              "& .MuiTab-root": {
                flexDirection: "row",
                padding: "10px",
                minHeight: "48px",
              },
            }}
          >
            {tabsData.map((tab) => (
              <Tab
                style={{
                  height: "48px",
                  minHeight: "48px",
                  backgroundColor:
                    tab.value === currentTab ? "#EAF3FC" : "transparent",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
                iconPosition="start"
                icon={
                  tab.completed ? (
                    <DoneOutlinedIcon
                      sx={{
                        color: "#027A48",
                        background: "#E1FFF3",
                        borderRadius: "50%",
                        padding: "4px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  ) : (
                    <Typography
                      color={tab.value !== currentTab ? "#393939" : "#145DA0"}
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {tab.value}
                    </Typography>
                  )
                }
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
                className={`${useStyles}`}
                disabled={tab.value >= currentTab}
              />
            ))}
          </TabList>

          {tabsData?.map((tab) => (
            <TabPanel
              key={tab.value}
              value={tab.value}
              sx={{
                padding: "5px 24px",
                height: "100%",
              }}
            >
              {tab.component}
            </TabPanel>
          ))}
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default AddPatients;
