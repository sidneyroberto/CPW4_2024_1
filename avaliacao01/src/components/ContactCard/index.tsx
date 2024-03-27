import contactLogo from "../../assets/img/contact.png";
import { CardContainer, ContactIcon, ContactName } from "./styles";

type Props = {
  name: string;
};

const ContactCard = ({ name }: Props) => {
  return (
    <CardContainer>
      <ContactIcon data-cy="contact-logo" src={contactLogo} alt="Contato" />
      <ContactName data-cy="contact-name">{name}</ContactName>
    </CardContainer>
  );
};

export default ContactCard;
