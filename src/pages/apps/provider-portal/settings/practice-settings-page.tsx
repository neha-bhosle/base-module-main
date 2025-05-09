import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { Grid, Typography, Paper, Box } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import { SettingsFormLabels } from "../../../../constants/formConst";
const menuItems = [
  { label: "Profile", path: "profile-tabs" },
  { label: "Locations", path: "profile-tabs/location" },
  { label: "Users", path: "profile-tabs/user" },
  { label: "Roles & Responsibility", path: "profile-tabs/roles" },
  { label: "Contacts", path: "profile-tabs/contact" },
  { label: "Print Configuration", path: "profile-tabs" },
];

const PracticeSettingsPage = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    navigate(`/admin/settings-tabs/${path}`);
  };

  return (
    <Box display="flex" height={"100%"}>
      <Paper
        elevation={1}
        sx={{
          width: "280px",
          borderRadius: "8px",
          p: 2,
        }}
      >
        <Grid container direction="column" spacing={2}>
          {/* Header */}
          <Grid item>
            <Grid
              container
              alignItems="center"
              spacing={1}
              display={"flex"}
              flexDirection={"row"}
              gap={1}
            >
              <Grid
                item
                bgcolor={"#F2F8FF"}
                display={"flex"}
                borderRadius={"4px"}
                width={"35px"}
                height={"35px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <DomainAddOutlinedIcon sx={{ color: "#004FD9" }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="text.primary">
                  {SettingsFormLabels.PRACTICE}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Menu Items */}
          <Grid item>
            <Grid container direction="column">
              {menuItems.map((item, index) => (
                <Grid
                  key={index}
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  onClick={() => handleMenuItemClick(item.path)}
                  sx={{
                    py: 1,
                    px: 1,
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "action.hover",
                      borderRadius: "4px",
                    },
                  }}
                >
                  <Grid item>
                    <Typography color="text.primary">{item.label}</Typography>
                  </Grid>
                  <Grid item>
                    <NavigateNextOutlinedIcon
                      sx={{
                        color: "text.secondary",
                        fontSize: "20px",
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Box flex={1} ml={2}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default PracticeSettingsPage;
