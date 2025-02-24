class loginPage {
    logo = '.logo > img'
    cart = '.showcart'
    content_header = '.content-heading'
    content_product = '.product-items'
    content_info = '.content-heading > .info'
    photo_product = ':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    name_product = ':nth-child(1) > .product-item-info > .product-item-details > .product-item-name'
    review_product = ':nth-child(1) > .product-item-info > .product-item-details > .product-reviews-summary'
    price_product = ':nth-child(1) > .product-item-info > .product-item-details > .price-box'
    size_product = '.swatch-opt-1556 > .size > .swatch-attribute-options'
    color_product = '.swatch-opt-1556 > .swatch-attribute.color > .swatch-attribute-options'
    error_email = '#email-error'
    error_password = '#pass-error'
    error_message_field_required = '.message-error > div'

    required_content(){
        cy.get(this.content_header).should('be.visible')
        cy.get(this.content_info).should('be.visible')
        cy.get(this.content_product).should('be.visible')
    }
    required_product(){
        cy.get(this.photo_product).should('be.visible')
        cy.get(this.name_product).should('be.visible')
        cy.get(this.review_product).should('be.visible')
        cy.get(this.price_product).should('be.visible')
        cy.get(this.size_product).should('be.visible')
        cy.get(this.color_product).should('be.visible')
    }
    required_error_blank(){
        cy.get(this.error_email).should('be.visible')
        cy.get(this.error_email).should('be.visible')
        cy.get('.base').should('be.visible')
        cy.get('.panel.wrapper > .panel > .header').should('be.visible')
        cy.get('.page-title-wrapper').should('be.visible')
        cy.get('.login-container > .block-customer-login').should('be.visible')
        cy.get('.login-container > .block-new-customer > .block-content').should('be.visible')
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').should('be.visible')
    }
    required_error_invalid(){
        cy.get(this.error_message_field_required).should('be.visible')
        cy.get('.base').should('be.visible')
        cy.get('.panel.wrapper > .panel > .header').should('be.visible')
        cy.get('.page-title-wrapper').should('be.visible')
        cy.get('.login-container > .block-customer-login').should('be.visible')
        cy.get('.login-container > .block-new-customer > .block-content').should('be.visible')
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').should('be.visible')
    }
    required_error_invalid_Format(){
        cy.get(this.error_email).should('be.visible')
        cy.get(this.error_email).contains('@')
        cy.get('.base').should('be.visible')
        cy.get('.panel.wrapper > .panel > .header').should('be.visible')
        cy.get('.page-title-wrapper').should('be.visible')
        cy.get('.login-container > .block-customer-login').should('be.visible')
        cy.get('.login-container > .block-new-customer > .block-content').should('be.visible')
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').should('be.visible')
    }

}
export default new loginPage()