import loginPage from "../../support/POM/loginPage"

describe('verify login functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })

  //generate email
  function randomEmail(){
    const randomName = Math.random().toString(25).substring(2,16)
    const randomEmail = randomName + '@gmail.com'
    return randomEmail
  }
  let emailUser = randomEmail()

  //generate invalid email format
  function randomEmailInvalid(){
    const randomNameUser = Math.random().toString(25).substring(2,16)
    const randomEmailInvalid = randomNameUser + 'gmail.com'
    return randomEmailInvalid
  }
  let emailUserInvalid = randomEmailInvalid()

  //test login success
  it('login success', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.login('kelompok9_sanber_sqa@gmail.com','@Sanber2025')
    cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
    cy.get(loginPage.logo).should('be.visible')
    cy.get(loginPage.cart).should('be.visible')
    loginPage.required_content()
    loginPage.required_product()
  })

  //test login failed blank field
  it('login failed blank field',() => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    loginPage.required_error_blank()
  })

  //test login failed invalid email address
  it('login failed invalid email', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.login(emailUser,'@Sanber2025')
    loginPage.required_error_invalid()
  })

  //test login failed invalid email format
  it('login failed invalid email format', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.login(emailUserInvalid,'@Sanber2025')
    loginPage.required_error_invalid_Format()
  })

  function randomPassword(){
    const randomPassword = Math.random().toString(36).substring(3,10)
    return randomPassword
  }
  let randPassword = randomPassword()

  //test login invalid password
  it('login failed invalid password', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.login('kelompok9_sanber_sqa@gmail.com',randPassword)
    loginPage.required_error_invalid()
  })

  //test login invalid password format
  it('login failed invalid password format', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.login('kelompok9_sanber_sqa@gmail.com','@sanber2025')
    loginPage.required_error_invalid()
  })
})