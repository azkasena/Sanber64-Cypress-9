class magentoPage {
    saved_edit = '#form-validate > .actions-toolbar > div.primary > .action'
    chn_email_check = '#change-email'
    chn_pass_check = '#change-password'

    saveEdit() {
        cy.get(this.saved_edit).click()
    }
    change_email_checkbox() {
        cy.get(this.chn_email_check).click()
    }
    change_pass_checkbox() {
        cy.get(this.chn_pass_check).click()
    }
    required_notif() {
        cy.contains("This is a required field.").should('be.visible')
    }
    saved_info() {
        cy.contains('You saved the account information').should('be.visible')
    }
    saved_address() {
        cy.contains('You saved the address.').should('be.visible')
    }
}
export default new magentoPage()