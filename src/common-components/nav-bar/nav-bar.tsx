import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/New Logo.svg";
import BasicMenu from "../menu/menu";
import { UserProfile } from "src/models/userModel";
import BellIcon from "../../assets/Projectsvgs/bell-icon";
import MagnifiyingGlassIcon from "../../assets/Projectsvgs/magnifyingglassicon";
import NavAvatar from "../nav-avatar/navAvatar";
import { GetNavbarStyles } from "./widgets/navbarStyles";

export type NavItem = {
  label: string;
  type?: string;
  route?: string;
  value?: NavItem[];
};

interface NavBarProps {
  navBarData: NavItem[];
}

function NavbarV1(props: NavBarProps) {
  const { navBarData } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const themeStyles = GetNavbarStyles();
  const isMobile = useMediaQuery("(max-width:1255px)");
  const isNavbarChange = useMediaQuery("(max-width:561px)");

  const handleClick = (route: string) => {
    if (route) {
      const normalizedRoute = route.replace(/^\.?\//, "/");
      navigate(normalizedRoute);
    }
  };

  const isSelected = (item: NavItem) => {
    if (!item.route) return false;

    const currentPath = location.pathname.replace(/^\/|\/$/g, "").toLowerCase();
    const itemRoute = item.route.replace(/^\/|\/$/g, "").toLowerCase();
    const normalizedCurrentPath = currentPath.replace(/^admin\//, "");

    return normalizedCurrentPath.startsWith(itemRoute);
  };

  return (
    <>
      <Grid
        container
        justifyContent={"space-between"}
        sx={{
          ...themeStyles.container,
          padding: isNavbarChange ? "0.5px 7px" : "0.5px 24px",
        }}
      >
        <Grid item>
          <Box>
            <Grid
              container
              alignItems={"center"}
              gap={!isMobile ? "18px" : isNavbarChange ? "8px" : "22px"}
            >
              {/* {isMobile && <SideDrawer data={navBarData} />} */}
              <img
                src={
                  // currentUserData?.providerGroup?.logo ||
                  logo
                }
                height={isNavbarChange ? "21px" : "30px"}
                alt="logo"
              />
              {!isMobile && (
                <Box display={"flex"}>
                  {navBarData?.map((item: NavItem) =>
                    item.type === "text" ? (
                      <Typography
                        key={item.label}
                        sx={{
                          ...themeStyles.typo,
                          ...(isSelected(item) && {
                            borderBottom: "2px solid blue",
                            color: "#004FD9",
                            backgroundColor: "#e3f2fd",
                            fontWeight: 600,
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "4px",
                          }),
                        }}
                        onClick={() => handleClick(item.route || "")}
                      >
                        {item.label}
                      </Typography>
                    ) : (
                      <BasicMenu key={item.label} value={item} />
                    )
                  )}
                </Box>
              )}
            </Grid>
          </Box>
        </Grid>

        <Grid item>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={isNavbarChange ? "8px" : "22px"}
          >
            <Grid
              item
              display={isNavbarChange ? "none" : "flex"}
              flexDirection="row"
              alignItems={"center"}
              gap={2}
            >
              <Grid
                gap={3}
                display={"flex"}
                flexDirection={"row"}
                mr={1}
                alignItems={"center"}
              >
                <Grid>
                  <BellIcon />
                </Grid>
                <Grid>
                  <MagnifiyingGlassIcon />
                </Grid>
              </Grid>
              <NavAvatar
                response={
                  {
                    uuid: "",
                    email: "",
                    firstName: "John",
                    lastName: "Doe",
                    phone: "",
                    active: true,
                    archive: false,
                    lastLogin: null,
                    avatar: undefined,
                  } as UserProfile
                }
              />
              <Typography variant="titleSmallRegular" color="black">
                Joh Doe
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default NavbarV1;
