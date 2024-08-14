declare namespace Cypress {
  interface Chainable {
    verificarCertificadoExiste(nomeAvaliador: string): Chainable<Element>;
    downloadFile(
      url: string,
      directory: string,
      filename: string,
      userAgent?: string
    ): Chainable<any>;
  }
}
