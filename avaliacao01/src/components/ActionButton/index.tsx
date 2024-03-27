import { Button } from "./styles";

type Props = {
  label: string;
  onClick: () => void;
};

const ActionButton = ({ label, onClick }: Props) => {
  return (
    <Button onClick={onClick} data-cy="action-button">
      {label}
    </Button>
  );
};

export default ActionButton;
