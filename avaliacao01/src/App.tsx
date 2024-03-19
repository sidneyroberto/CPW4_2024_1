import { useState } from "react";
import { fakerPT_BR as faker } from "@faker-js/faker";

import ActionButton from "./components/ActionButton";
import Box from "./components/Box";
import { ButtonsArea, Container } from "./globalStyles";
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
        <ButtonsArea>
          <ActionButton label="Adicionar contato" onClick={addContact} />
          <ActionButton label="Limpar lista" onClick={clearContactsList} />
        </ButtonsArea>

        {contacts.length > 0 &&
          contacts.map((c, index) => <ContactCard key={index} name={c} />)}
      </Box>
    </Container>
  );
};

export default App;
