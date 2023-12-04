import loginPage from "../../support/pageObject/loginPage";

describe('Create an Account', () => {
  
  function randomMail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const mail = randomString + "@gmail.com"
    return mail
  }
  function randomName(){
    const randomString = Math.random().toString(36).substring(2,10)
    const name = "User"+randomString
    return name
  }
  const accountData = require ('../../fixtures/accountData.json')
  let gmail = randomMail()
  let firstName = randomName()

  beforeEach(() => {
    cy.visit('')
  })

  it('create account already exist', () => {
    cy.contains('Create an Account').click()
    cy.createaccount(accountData.fName,accountData.lName,accountData.mail,accountData.pass,accountData.confirmPass)
    cy.get('.action.submit.primary').click()
    cy.contains('There is already an account with this email address.').should('be.visible')
    
  })
  it('create new account success', () => {
    cy.contains('Create an Account').click()
    loginPage.inputfirstName(firstName)
    //cy.get('#firstname').type(firstName)
    loginPage.inputlastName('ExistName')
    //cy.get('[name="lastname"]').type('Exist1')
    loginPage.inputEmail(gmail)
    //cy.get('#email_address').type(gmail)
    loginPage.inputPassword('PassExist123')
    //cy.get('#password').type('User2@12345')
    loginPage.inputconfirmPassword('PassExist123')
    //cy.get('#password-confirmation').type('User2@12345')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    cy.contains(firstName).should('be.visible')
  })
})