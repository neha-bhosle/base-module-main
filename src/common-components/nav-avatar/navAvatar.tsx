import { Avatar, Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { UserProfile } from "../../models/userModel";
import { navAvatarStyles, navLogOut } from "./widgets/navAvatarStyles";

interface NavAvatarProps {
  response?: UserProfile | null;
}

export default function NavAvatar(props: NavAvatarProps) {
  const { response } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, setOpenCustomDialog] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Box onClick={handleClick} component="div">
        <Avatar
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          alt={`${response?.firstName} ${response?.lastName}`}
          src={
            response?.avatar ?? `${response?.firstName} ${response?.lastName}`
          }
          sx={navAvatarStyles}
        />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setOpenCustomDialog(true);
          }}
          sx={navLogOut}
        ></MenuItem>
      </Menu>
    </Box>
  );
}
