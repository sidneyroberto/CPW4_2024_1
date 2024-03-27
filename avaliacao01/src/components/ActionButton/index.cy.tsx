import ActionButton from ".";

describe("<ActionButton />", () => {
  it("should render label correctly", () => {
    const label = "Meu texto";

    cy.mount(<ActionButton label={label} onClick={() => {}} />);
    cy.get('[data-cy="action-button"]').should("have.text", label);
  });
});
