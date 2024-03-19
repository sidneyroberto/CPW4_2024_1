import { Button } from "./styles";

type Props = {
  label: string;
  onClick: () => void;
};

const AddContactButton = ({ label, onClick }: Props) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default AddContactButton;
