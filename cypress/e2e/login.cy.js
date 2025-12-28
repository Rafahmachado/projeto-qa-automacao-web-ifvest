describe('Login – Plataforma IFVEST', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('Deve realizar login com credenciais válidas', () => {
    cy.get('[name="usuario"]').type('usuario_teste')
    cy.get('[name="senha"]').type('senha_teste')
    cy.get('.btn-login').click()

    // Validação simples pós-login
    cy.url().should('not.include', '/login')
  })
})

