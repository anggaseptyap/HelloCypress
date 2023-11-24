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

  let gmail = randomMail()
  let firstName = randomName()

  beforeEach(() => {
    cy.visit('')
  })

  it('create account already exist', () => {
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Angga Septya')
    cy.get('[name="lastname"]').type('Putra')
    cy.get('#email_address').type('angga@gmail.com')
    cy.get('#password').type('Angga@12345')
    cy.get('#password-confirmation').type('Angga@12345')
    cy.get('.action.submit.primary').click()
    cy.contains('There is already an account with this email address.').should('be.visible')
    
  })
  it('create new account success', () => {
    cy.contains('Create an Account').click()
    cy.get('#firstname').type(firstName)
    cy.get('[name="lastname"]').type('Exist1')
    cy.get('#email_address').type(gmail)
    cy.get('#password').type('User2@12345')
    cy.get('#password-confirmation').type('User2@12345')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    cy.contains(firstName).should('be.visible')
  })
})