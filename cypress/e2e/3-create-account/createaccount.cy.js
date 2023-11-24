describe('Create an Account', () => {
  it('create account already exist', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Bimasakti')
    cy.get('[name="lastname"]').type('Hendra')
    cy.get('#email_address').type('bimasak@gmail.com')
    cy.get('#password').type('Bimasak@12345')
    cy.get('#password-confirmation').type('Bimasak@12345')
    cy.get('.action.submit.primary').click()
    cy.contains('There is already an account with this email address.').should('be.visible')
    
  })
  it('create new account success', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('User1')
    cy.get('#lastname').type('Exist1')
    cy.get('#email_address').type('userexist3@gmail.com')
    cy.get('#password').type('User2@12345')
    cy.get('#password-confirmation').type('User2@12345')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    
  })
})