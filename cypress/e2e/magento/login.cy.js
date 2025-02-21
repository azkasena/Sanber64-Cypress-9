describe('verify login functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  //test login success
  it('login success', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9_sanber_sqa@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Sanber2025')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
    cy.get('.logo > img').should('be.visible')
    cy.get('.showcart').should('be.visible')
  })

  //test login failed blank field
  it('login failed blank field',() => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get('#email-error').should('be.visible')
    cy.get('#pass-error').should('be.visible')
  })

  //test login failed invalid email address
  it('login failed invalid email', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9_@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Sanber2025')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('be.visible')
    cy.get('.base').should('be.visible')
    cy.get('.login-container > .block-new-customer').contains('Create an Account')
  })

  //test login invalid password
  it('login failed invalid password', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9_sanber_sqa@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sanber2025')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('be.visible')
    cy.get('.base').should('be.visible')
    cy.get('.login-container > .block-new-customer').contains('Create an Account')
  })

  //test login invalid password format
  it.only('login failed invalid password format', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9_sanber_sqa@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@sanber2025')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('be.visible')
    cy.get('.base').should('be.visible')
    cy.get('.login-container > .block-new-customer').contains('Create an Account')
  })
})