describe("Home page tests", () => {
  it("should render correct number of contact cards", () => {
    cy.visit("");

    const clickTimes = 10;

    const addContactButton = cy.get('[data-cy="action-button"]:first-of-type');

    for (let i = 0; i < clickTimes; i++) {
      addContactButton.click();
    }

    /**
     * Recupera todos os filhos da div [data-cy="contacts-area"] -
     * que no caso são todos os cards de contato - utilizando
     * a função get. Como este processo é assíncrono, aguarda
     * a resposta, a qual é capturada com a função then. Nela,
     * é recebida o array dos elementos (elements) devolvidos,
     * que no caso são os cards de contato. No then, é
     * implementada uma função que retorna a quantidade de
     * cards que foram retornados (elements.length). Por fim,
     * é verificado se a quantidade de cards retornados é igual
     * a quantidade de cliques realizados no botão "Adicionar contato".
     */
    cy.get('[data-cy="contacts-area"] > *')
      .then((elements) => elements.length)
      .should("eq", clickTimes);
  });

  it("should empty contacts list", () => {
    cy.visit("");

    const clickTimes = 10;

    const addContactButton = cy.get('[data-cy="action-button"]:first-of-type');

    for (let i = 0; i < clickTimes; i++) {
      addContactButton.click();
    }

    cy.get('[data-cy="action-button"]:nth-of-type(2)').click();

    /**
     * Recupera a div data-cy="contacts-area" utilizando a
     * função get. Após, utilizando a função find, procura
     * todas as imagens de logo de contato ([data-cy="contact-logo"]).
     * A função find irá retornar um array com todas as imagens de logo.
     * Por fim, utiliza a função should para verificar se o tamanho do array
     * é igual a zero. A idéia aqui é verificar se após clicar no botão
     * "Limpar lista" nenhum card de contato é renderizado na página.
     */
    cy.get('[data-cy="contacts-area"]')
      .find('[data-cy="contact-logo"]')
      .should("have.length", 0);
  });
});
