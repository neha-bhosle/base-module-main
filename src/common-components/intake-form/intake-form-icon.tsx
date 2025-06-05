import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export type IntakeFormStatus = "PENDING" | "SCHEDULED" | "COMPLETED";

const intakeFormColorMap = {
  PENDING: "#565656",
  SCHEDULED: "#B54708",
  COMPLETED: "#049B22",
};

export const getIntakeFormColor = (status: IntakeFormStatus) => {
  return intakeFormColorMap[status] || intakeFormColorMap.PENDING;
};

const IntakeFormIcon = ({
  status = "PENDING",
}: {
  status?: IntakeFormStatus;
}) => {
  const color = getIntakeFormColor(status);
  return <DescriptionOutlinedIcon sx={{ color }} />;
};

export default IntakeFormIcon;
