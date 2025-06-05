import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import NavbarV1 from "../common-components/nav-bar/nav-bar";
import useAuthority from "../hooks/use-authority";
import { providerNavbar } from "../models/navbar";
import { mainLayoutStyles } from "./widgets/mainLayoutStyles";

const MainLayout = (props: React.PropsWithChildren) => {
  const { portal } = useAuthority();
  const location = useLocation();

  const getNavbarData = () => {
    switch (portal) {
      default:
        return providerNavbar;
    }
  };

  const isAddPatientsPage = location.pathname.includes("/add-patient");

  return (
    <Box sx={mainLayoutStyles}>
      <NavbarV1 navBarData={getNavbarData()} />
      <Box padding={isAddPatientsPage ? 0 : "16px 24px"}>{props.children}</Box>
    </Box>
  );
};

export default MainLayout;
