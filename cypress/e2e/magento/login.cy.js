describe('verify login functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  //test login success
  it('login success', () => {
    // cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9_sanber_sqa@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Sanber2025')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
    cy.get('.logo > img').should('be.visible')
    cy.get('.showcart').should('be.visible')
  })

  //test login failed blank field
  it('login failed',() => {
    // cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get('#email-error').should('be.visible')
    cy.get('#pass-error').should('be.visible')
  })
})