describe('Create an Account', () => {
  it('create account already exist', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Bimasakti')
    cy.get('#lastname').type('Hendra')
    cy.get('#email_address').type('bimasak@gmail.com')
    cy.get('#password').type('Bimasak@12345')
    cy.get('#password-confirmation').type('Bimasak@12345')
    cy.get('.action.submit.primary').click()
    cy.contains('There is already an account with this email address.').should('be.visible')
    
  })
  it('create new account success', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Bimasakti')
    cy.get('#lastname').type('Hendra')
    cy.get('#email_address').type('bimasak@gmail.com')
    cy.get('#password').type('Bimasak@12345')
    cy.get('#password-confirmation').type('Bimasak@12345')
    cy.get('.action.submit.primary').click()
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    
  })
})