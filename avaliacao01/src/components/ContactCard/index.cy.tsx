import ContactCard from ".";

describe("<ContactCard />", () => {
  it("should render contact name correctly", () => {
    const name = "Fulano de Tal";

    cy.mount(<ContactCard name={name} />);

    cy.get('[data-cy="contact-name"]').should("have.text", name);

    const width = "36";
    cy.get('[data-cy="contact-logo"]')
      .invoke("css", "width")
      .then((value) => parseFloat(`${value}`).toFixed(0))
      .should("eq", width);

    cy.get('[data-cy="contact-logo"]')
      .invoke("attr", "alt")
      .should("eq", "Contato");
  });
});
