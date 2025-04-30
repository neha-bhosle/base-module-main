import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { NavItem } from "../nav-bar/nav-bar";
import { typo } from "./widgets/menuStyles";

interface BasicMenuProps {
  value: NavItem;
  key: string;
}

export default function BasicMenu(props: BasicMenuProps) {
  const { value } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (routeLink: string) => {
    setAnchorEl(null);
    if (routeLink) navigate(routeLink);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          ...typo,
          borderBottom:
            location.pathname.toLowerCase().includes(value.route || "") ||
            location.pathname.toLowerCase().includes(value.label.toLowerCase().replace(/\s/g, ""))
              ? "2px solid white"
              : "inherit"
        }}>
        {value.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}>
        {value?.value &&
          Array.isArray(value.value) &&
          value.value.map((item: { label?: string; route?: string }, index: number) => (
            <MenuItem key={index} onClick={() => handleClose(item?.route || "")}>
              {item?.label || ""}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}
