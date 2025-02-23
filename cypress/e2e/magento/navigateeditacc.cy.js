describe('Verify Navigate to Edit account & Edit Address', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    })
    it('Success navigate to edit account page', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
    })
    it('Success navigate to edit account page from sidebar Account Information', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get(':nth-child(7) > a').click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
    })
    it('Success navigate to change password page', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.change-password').click()
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/edit/changepass/')
    })
    it('Success navigate Edit Address from default billing address', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/address/edit/')
    })
    it('Success navigate Edit Address from default shipping address', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.box-shipping-address > .box-actions > .action > span').click()
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/address/edit/')
    })
    it('Success navigate Edit Address from Manage Addresses', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.block-dashboard-addresses > .block-title > .action > span').click()
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/address')
    })
    it('Success navigate Edit Address from sidebar Address Book', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.items > :nth-child(6) > a').click()
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/address/')
    })
})
