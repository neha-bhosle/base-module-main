import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  ButtonBase,
  Drawer,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { drawerHeader, gridHeader } from "./widgets/drawer-bs.widgets";
import { theme } from "../../utils/theme";

interface DrawerProps {
  anchor?: "left" | "top" | "right" | "bottom";
  open?: boolean;
  title?: string;
  drawerWidth?: string;
  drawerPadding?: string;
  onClose?: () => void;
  headerStyle?: number | string;
  headerMarginBottom?: string;
}

const DrawerBS = (props: React.PropsWithChildren<DrawerProps>) => {
  const { drawerWidth, drawerPadding, headerMarginBottom } = props;
  const isMobile = useMediaQuery("(max-width:450px)");
  const belowLg = useMediaQuery(theme.breakpoints.down("lg")) && !drawerWidth;

  return (
    <Drawer anchor={props.anchor} open={props.open} onClose={props.onClose}>
      <Grid
        container
        flexDirection={"column"}
        height={"100%"}
        flexWrap={"nowrap"}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            ...gridHeader,
            marginBottom: headerMarginBottom ? headerMarginBottom : "20px",
          }}
          mt={props.headerStyle}
        >
          <Grid item>
            <Typography sx={drawerHeader}>{props.title}</Typography>
          </Grid>
          <Grid item>
            <ButtonBase onClick={props.onClose}>
              <CloseOutlinedIcon />
            </ButtonBase>
          </Grid>
        </Grid>
        <Grid
          item
          flex={1}
          sx={{
            width: isMobile
              ? "100vw"
              : drawerWidth
                ? drawerWidth
                : belowLg
                  ? "50vw"
                  : "40vw",
            paddingX: drawerPadding ? drawerPadding : "24px",
            paddingBottom: "20px",
            position: "relative",
          }}
        >
          {props.children}
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default DrawerBS;
