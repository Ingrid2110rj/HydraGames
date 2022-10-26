//// <reference types="cypress" />


const user = require('../fixtures/usuario.json')



describe('Testando a página Erick the Red', () => {

  beforeEach(() => {
    cy.visit('/')

  })

  it('Valida página principal', () => {

    cy.home()

  })



  it('Login com senha inválida', () => {
    cy.loginFailure(user.email, user.password2)
  })

  it('Login com e-mail inválido', () => {

    cy.loginFailure(user.email, user.password)


  })
  it('Login com sucesso', () => {

    cy.loginSuccess(user.email, user.password)





  })



})
