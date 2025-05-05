import { Box } from "@mui/material";
import NavbarV1 from "../common-components/nav-bar/nav-bar";
import useAuthority from "../hooks/use-authority";
import { providerNavbar } from "../models/navbar";
import { mainLayoutStyles } from "./widgets/mainLayoutStyles";

const MainLayout = (props: React.PropsWithChildren) => {
  const { portal } = useAuthority();

  const getNavbarData = () => {
    switch (portal) {
      default:
        return providerNavbar;
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
