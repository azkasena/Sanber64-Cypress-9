import magentoPage from "../../support/POM/magento"

describe('Verify Edit Address', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/address/')
    })
    it('Success add new address', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#street_1').type('jalan raya')
        cy.get('#country').select('Indonesia')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.saved_address()
    })

    it('Success edit from Additional Address Entries edit button', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('You saved the address.').should('be.visible')
    })

    it('Success edit from Additional Address Entries edit button', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get(':nth-child(1) > .actions > .edit > span').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#street_1').type('jalan raya')
        cy.get('#country').select('Indonesia')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54516')
        magentoPage.saveEdit()
        magentoPage.saved_address()
    })

    it('Success delete from Additional Address Entries delete button', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        magentoPage.saved_address()
    })

    it.only('Success delete from Additional Address Entries delete button', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get(':nth-child(1) > .actions > .delete > span').click()
        cy.contains('Are you sure you want to delete this address?').should('be.visible')
        cy.get('.action-primary').click()
        cy.contains('You deleted the address.').should('be.visible')
    })

    it('Failed empty first name', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#firstname').clear()
        cy.get('#telephone').type('081')
        cy.get('#street_1').type('jalan raya')
        cy.get('#country').select('Indonesia')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.required_notif()
    })

    it('Failed empty last name', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('This is a required field.').should('be.visible')
    })

    it('Failed empty last name', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#lastname').clear()
        cy.get('#telephone').type('081')
        cy.get('#street_1').type('jalan raya')
        cy.get('#country').select('Indonesia')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.required_notif()
    })

    it('Failed empty phone number', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('This is a required field.').should('be.visible')
    })

    it('Failed empty phone number', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#street_1').type('jalan raya')
        cy.get('#country').select('Indonesia')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.required_notif()
    })

    it('Failed empty street address', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('This is a required field.').should('be.visible')
    })

    it('Failed empty street address', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#country').select('Indonesia')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.required_notif()
    })

    it('Failed empty city', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('This is a required field.').should('be.visible')
    })

    it('Failed empty city', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#country').select('Indonesia')
        cy.get('#street_1').type('jalan raya')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.required_notif()
    })

    it('Failed empty province', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('This is a required field.').should('be.visible')
    })

    it('Failed empty province', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#street_1').type('jalan raya')
        cy.get('#city').type('medan')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('Please select an option.').should('be.visible')
    })

    it('Failed empty zipcode', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#country').select('Indonesia')
        cy.get('#street_1').type('jalan raya')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        magentoPage.saveEdit()
        magentoPage.required_notif()
    })

    it.only('Notification zipcode above 6 numbers', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('This is a required field.').should('be.visible')
    })

    it('Notification zipcode above 6 numbers', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#country').select('Indonesia')
        cy.get('#street_1').type('jalan raya')
        cy.get('#city').type('medan')
        cy.get('#region').type('Jawa')
        cy.get('#zip').type('54515651651651')
        cy.contains('Provided Zip/Postal Code seems to be invalid.').should('be.visible')
        magentoPage.saveEdit()
        magentoPage.saved_address()
    })

    it('Default country is United States', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('You saved the address.').should('be.visible')
    })

    it('Default country is United States', () => {
        cy.login('kelompok9_sanber_sqa@gmail.com', '@Sanber2025')
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
        cy.contains('Street Address').should('be.visible')
        cy.get('#telephone').type('081')
        cy.get('#street_1').type('jalan raya')
        cy.get('#city').type('medan')
        cy.get('#region_id').select('Alaska')
        cy.get('#zip').type('54515')
        magentoPage.saveEdit()
        magentoPage.saved_address()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains('You saved the address.').should('be.visible')
    })

})