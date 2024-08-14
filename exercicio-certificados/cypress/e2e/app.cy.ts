describe("Testes e2e no app de certificados da Feciaq 2022", () => {
  beforeEach(() => {
    cy.visit("");
    cy.fixture("avaliadorPresencial").as("avaliadorPresencial");
    cy.fixture("avaliadorResumos").as("avaliadorResumos");
  });

  it("deve fazer o download do certificado de um avaliador presencial", function () {
    cy.get(".hamburger-box").click();
    cy.get('[href="/avaliadores-presenciais"] > p').click();

    cy.verificarCertificadoExiste(this.avaliadorPresencial.nome);
  });
});
