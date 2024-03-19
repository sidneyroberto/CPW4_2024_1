import contactLogo from "../../assets/img/contact.png";
import { CardContainer, ContactIcon, ContactName } from "./styles";

type Props = {
  name: string;
};

const ContactCard = ({ name }: Props) => {
  return (
    <CardContainer>
      <ContactIcon src={contactLogo} alt="Contato" />
      <ContactName>{name}</ContactName>
    </CardContainer>
  );
};

export default ContactCard;
