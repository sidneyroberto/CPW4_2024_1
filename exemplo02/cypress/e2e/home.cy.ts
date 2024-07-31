describe("e2e tests over home page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.fixture("apiResponse").as("apiResponse");
  });

  it("should render correct number of word cards when search is performed", function () {
    const term = "a";
    cy.intercept("GET", `${Cypress.env("API_URL")}/${term}`, {
      body: this.apiResponse,
    });

    cy.get('[data-cy="search-input"]').type(term);
    cy.get('[data-cy="search-button"]').click();

    cy.get("[data-cy='word-card']").should(
      "have.length",
      this.apiResponse.length
    );
  });
});
