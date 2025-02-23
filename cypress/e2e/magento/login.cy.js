import loginPage from "../../support/page-objects/loginPage"

describe('verify login functionality', () => {
  beforeEach(() => {
    cy.visit('')
  })
  //test login success
  it('login success', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.fixture('users').then((email) => {
      const datauser = email[1]
      cy.login(datauser.email,datauser.password)
      loginPage.clickLoginButton()
      //assertion
      cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
      cy.get(loginPage.logo).should('be.visible')
      cy.get('.showcart').should('be.visible')
    })
  })

  function randomEmail(){
    const randomEmail = Math.random().toString(26).substring(2, 10);
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'mail.com', 'example.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${randomEmail}@${randomDomain}`;
  }
  let email = randomEmail()

  //test login failed blank field
  it('login failed blank field',() => {
    cy.get('.panel > .header > .authorization-link > a').click()
    loginPage.clickLoginButton()
    //assertion
    cy.get(loginPage.logo).should('be.visible')
    cy.get('#email-error').should('be.visible')
    cy.get('#pass-error').should('be.visible')
  })

  //test login failed invalid email address
  it('login failed invalid email', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9sqa@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Sanber2025')
    loginPage.clickLoginButton()
    //assertion
    cy.get(loginPage.logo).should('be.visible')
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('be.visible')
    cy.get('.base').should('be.visible')
    cy.get('.login-container > .block-new-customer').contains('Create an Account')
  })

  function randomPassword(){
    const randomPassword = Math.random().toString(36).substring(3,10)
    return randomPassword
  }
  let password = randomPassword()

  //test login invalid password
  it('login failed invalid password', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('kelompok9_sanber_sqa@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sanber2025')
    loginPage.clickLoginButton()
    //assertion
    cy.get(loginPage.logo).should('be.visible')
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('be.visible')
    cy.get('.base').should('be.visible')
    cy.get('.login-container > .block-new-customer').contains('Create an Account')
  })

  //test login invalid password format
  it('login failed invalid password format', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.fixture('users').then((email) => {
      const dataemail = email
      loginPage.inputEmail('kelompok9_sanber_sqa@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@sanber2025')
      loginPage.clickLoginButton()
      //assertion
      cy.get(loginPage.logo).should('be.visible')
      cy.messageError('.message-error > div', 'sign-in was incorrect')
      cy.verifyText('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span', 'Sign In')
      cy.get('.message-error').should('be.visible')
      cy.get('.message-error > div').should('be.visible')
      cy.get('.base').should('be.visible')
      cy.get('.login-container > .block-new-customer').contains('Create an Account')
      cy.get('.block-new-customer > .block-title').should('be.visible')
      cy.get('#block-new-customer-heading').should('be.visible')
    })

  })
})