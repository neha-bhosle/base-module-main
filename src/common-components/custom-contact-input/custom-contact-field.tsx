declare global {
  interface Window {
    MSStream?: object;
  }
}

import MuiPhoneNumber from "material-ui-phone-number";
const customcontactFieldStyles = {
  "& input": {
    color: "black",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "120%",
    letterSpacing: "0.024px",
    padding: "11.5px 14px",
  },
  "& .Mui-error": {
    margin: 0,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    color: "red",
    marginRight: "14px",
    marginBottom: "0px",
    marginLeft: "0px",
    fontFamily: "Figtree",
  },
};

interface CustomContactInputProps {
  value?: string | number;
  hasError?: boolean;
  errorMessage?: string | unknown;
  isDisabled?: boolean;
  onChange(selectedValue?: string): void;
  disableFlag?: boolean;
}

const CHARS_TO_EXCLUDE = ["(", ")", " ", "-"];

export default function CustomContactInput(props: CustomContactInputProps) {
  const { value, hasError, errorMessage, isDisabled, onChange } = props;

  const handleChange = (
    event: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const filteredVal = Array.from(event as string)
      .filter((char) => !CHARS_TO_EXCLUDE.includes(char))
      .join("");
    onChange(filteredVal);
  };

  const isIOS =
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream;

  return (
    <>
      <MuiPhoneNumber
        defaultCountry={"us"}
        variant="outlined"
        size="small"
        fullWidth
        value={value}
        disabled={isDisabled}
        countryCodeEditable={false}
        disableDropdown={isIOS ? true : isDisabled}
        onChange={handleChange}
        error={Boolean(hasError)}
        helperText={errorMessage ? String(errorMessage) : ""}
        onlyCountries={["us", "in"]}
        sx={{
          ...customcontactFieldStyles,
          "& .MuiPhoneNumber-flagButton": {
            pointerEvents: "none",
          },
          "& .Mui-error": {
            color: "red",
          },
          "& .MuiInputBase-root": {
            height: "40px",
          },
        }}
      />
    </>
  );
}
