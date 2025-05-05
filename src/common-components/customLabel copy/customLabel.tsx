import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { customLabelStyles } from "./widgets/customLabelstyles";

interface CustomFormLabelProps {
  label: string;
  isRequired?: boolean;
  isAuth?: boolean;
}

function CustomLabel(props: CustomFormLabelProps) {
  const { label, isRequired, isAuth } = props;
  const classes = customLabelStyles();

  return (
    <Box mb={1}>
      <Typography className={isAuth ? classes.authLabel : classes.headerLabel}>
        {label}
        {isRequired && <span className={classes.required}>*</span>}
      </Typography>
    </Box>
  );
}

CustomLabel.propTypes = {
  label: PropTypes.string
};

export default CustomLabel;
