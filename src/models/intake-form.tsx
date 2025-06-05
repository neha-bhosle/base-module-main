import IntakeFormIcon, { IntakeFormStatus } from "../common-components/intake-form/intake-form-icon";

interface IntakeFormProps {
  status?: IntakeFormStatus;
}

const IntakeForm = ({ status = "PENDING" }: IntakeFormProps) => {
  return (
    <div>
      <IntakeFormIcon status={status} />
    </div>
  );
};

export default IntakeForm;
