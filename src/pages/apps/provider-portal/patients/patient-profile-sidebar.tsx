import { Box, Grid2, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const patientProfileSideBarMenu = [
  {
    id: "Appointments",
    name: "Appointments",
    label: "appointments",
    icon: <WatchLaterOutlinedIcon />,
  },
  {
    id: "Notes/Records",
    name: "Notes/Records",
    label: "notes",
    icon: <EventNoteIcon />,
  },
  {
    id: "Insurance",
    name: "Insurance",
    label: "insurance",
    icon: <AccountBalanceOutlinedIcon />,
  },
  {
    id: "Billing",
    name: "Billing",
    label: "billing",
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    id: "Documents",
    name: "Documents",
    label: "documents",
    icon: <DescriptionOutlinedIcon />,
  },
  {
    id: "Profile",
    name: "Profile",
    label: "",
    icon: <PersonOutlineOutlinedIcon />,
  },
];

function PatientProfileSidebar() {
  const navigate = useNavigate();

  const [, setOpenSideListComponent] = useState("Dashboard");

  const navigateSidebar = (label: string, id: string) => {
    setOpenSideListComponent(id);
    navigate(label);
  };

  return (
    <Box sx={{width:"250px", backgroundColor:"#FFFFFF", border:"1px solid #E7E7E7" }}>
      <Grid2 sx={{ flex: 1 }}>
        <List>
          {patientProfileSideBarMenu.map((tab) => {
            return (
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px"
                }}
                key={tab.id}
                onClick={() => navigateSidebar(tab.label, tab.id)}
              >
                <Typography
                  variant="subtitleSemiBold"
                  noWrap
                  title={tab.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box sx={{ width: 20, height: 20, color: "#595F63", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {tab.icon}
                  </Box>
                    <Typography
                      variant="titleSmallProfileGrey"
                      component="span"
                      sx={{ ml: 1 }}
                    >
                      {tab.name}
                    </Typography>
                  
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Grid2>
    </Box>
  );
}

export default PatientProfileSidebar;