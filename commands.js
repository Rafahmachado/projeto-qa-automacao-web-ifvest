Cypress.Commands.add('login', () => {
  cy.visit('https://ifvest.jcr.ifsp.edu.br/login');
  cy.get('[name="usuario"]').type('rms123');
  cy.get('[name="senha"]').type('RmsTeste0123*');
  cy.get('.btn-login').click();
});
