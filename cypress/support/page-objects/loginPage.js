class loginPage{
    message_error = '.message-error > div'
    logo = '.logo > img'

    clickLoginButton() {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }
    
    inputEmail(valid_email){
        cy.get('#email').type(valid_email)
    }
}

export default new loginPage()