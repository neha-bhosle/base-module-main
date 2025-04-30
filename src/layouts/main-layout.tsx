import { Box } from "@mui/material";
import NavbarV1 from "../common-components/nav-bar/nav-bar";
import useAuthority from "../hooks/use-authority";
import {
  closerNavbar,
  patientNavbar,
  providerAdminNavbar,
  providerNavbar,
  setterNavbar,
  staffNavbar,
  superAdminNavbar,
} from "../models/navbar";
import { mainLayoutStyles } from "./widgets/mainLayoutStyles";
import { RoleTypeLowerCase } from "../constants/roles";

const MainLayout = (props: React.PropsWithChildren) => {
  const { portal, isCloser, isSetter } = useAuthority();

  const getNavbarData = () => {
    switch (portal) {
      case RoleTypeLowerCase.PATIENT:
        return patientNavbar;
      case RoleTypeLowerCase.ADMIN:
        return providerAdminNavbar;
      case RoleTypeLowerCase.SUPERADMIN:
        return superAdminNavbar;
      case RoleTypeLowerCase.STAFF:
        return isSetter ? setterNavbar : staffNavbar;
      default:
        return isCloser ? closerNavbar : providerNavbar;
    }
  };

  return (
    <Box sx={mainLayoutStyles}>
      <NavbarV1 navBarData={getNavbarData()} />
      <Box padding={"16px 24px"}>{props.children}</Box>
    </Box>
  );
};

export default MainLayout;
