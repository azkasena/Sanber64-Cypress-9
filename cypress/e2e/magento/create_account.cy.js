describe('Create Account Test', () => {
  it('Positif case', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
      cy.get('#firstname').type('Kelompok');
      cy.get('#lastname').type('Sembilan SQA');
      cy.get('#email_address').type(`kelompok9_sanber_sqa@gmail.com`);
      cy.get('#password').type('@Sanber2025');
      cy.get('#password-confirmation').type('@Sanber2025');
      cy.get('button[title="Create an Account"]').click();
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
  });
});
