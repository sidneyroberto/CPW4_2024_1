import Box from ".";

describe("<Box />", () => {
  it("should render children correctly", () => {
    const spanText = "Oi!";
    const span = <span data-cy="children">{spanText}</span>;

    cy.mount(<Box>{span}</Box>);

    cy.get('[data-cy="children"]').should("have.text", spanText);
  });
});
