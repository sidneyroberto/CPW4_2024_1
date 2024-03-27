import { useState } from "react";
import { fakerPT_BR as faker } from "@faker-js/faker";

import ActionButton from "./components/ActionButton";
import Box from "./components/Box";
import { ButtonsArea, ContactsArea, Container } from "./globalStyles";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState<string[]>([]);

  const addContact = () => {
    const name = faker.person.fullName();
    setContacts([...contacts, name]);
  };

  const clearContactsList = () => {
    setContacts([]);
  };

  return (
    <Container>
      <Box>
        <ButtonsArea data-cy="buttons-area">
          <ActionButton
            data-cy="add-contact"
            label="Adicionar contato"
            onClick={addContact}
          />
          <ActionButton label="Limpar lista" onClick={clearContactsList} />
        </ButtonsArea>

        <ContactsArea data-cy="contacts-area">
          {contacts.length > 0 &&
            contacts.map((c, index) => <ContactCard key={index} name={c} />)}
        </ContactsArea>
      </Box>
    </Container>
  );
};

export default App;
