Cypress.Commands.add('home', () => {
  cy.get('.notification-cookies-policy__text-wrapper > .btn').click()
    cy.url().should('be.equal', `${Cypress.config("baseUrl")}`

  )
})



  Cypress.Commands.add('loginFailure', (email, password) => {
    cy.get('.game-auth__button--login').click()
    cy.get('.login-form > :nth-child(1) > .input > .input__native').type(email)
    cy.get('.password-input > .input > .input__native').type(password)
    cy.get('.login-form > .btn').click()
    cy.get('.errors__error').should('be.visible')
    cy.get('.errors__error').should('have.text', 'Invalid email or password.')
    
 })

 Cypress.Commands.add('loginSuccess', (email, password) => {
  cy.get('.game-auth__button--login').click()
  cy.get('.login-form > :nth-child(1) > .input > .input__native').type(email)
  cy.get('.password-input > .input > .input__native').type(password)
  cy.get('.errors__error').should('not.exist')
  cy.get('.login-form > .btn').click()
  
})
