import "cypress-downloadfile/lib/downloadFileCommand";

Cypress.Commands.add("verificarCertificadoExiste", (nomeAvaliador: string) => {
  cy.get("#filter").type(nomeAvaliador);
  cy.get(".card > a")
    .invoke("attr", "href")
    .then((href) => {
      const downloadURL = `${Cypress.config().baseUrl}/${href}`;
      const folderPath = "cypress/fixtures/download";
      const fileName = "certificado.pdf";
      cy.downloadFile(downloadURL, folderPath, fileName);

      cy.readFile(`${folderPath}/${fileName}`).should("exist");
    });
});
