import PatientProfileSidebar from "./patient-profile-sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function PatientProfileOutlet() {
  return (
    <Box display="flex" width="100%" height="100%" >
      {/* Sidebar */}
      <PatientProfileSidebar />
      {/* Main Content */}
      <Box sx={{ flex: 1, background: '#FFFFFF', borderTop: '1px solid #E7E7E7'}}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default PatientProfileOutlet;