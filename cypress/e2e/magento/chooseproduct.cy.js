describe('Choose products and Update Shopping Cart', () => {
  it('Add a product to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get('#email').type('agnes@mail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('demo@123')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
      cy.get('.logo > img').should('be.visible')
      cy.get('.showcart').should('be.visible')
      cy.get('[id="product-addtocart-button"]').click()
      cy.get('[class="action showcart"]').should('have.text','3')
  })
})
