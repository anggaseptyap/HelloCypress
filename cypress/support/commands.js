// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
    Cypress.Commands.add('createaccount', (fName,lName,mail,pass,confirmPass) => {
        cy.get('#firstname').type(fName)
        cy.get('[name="lastname"]').type(lName)
        cy.get('#email_address').type(mail)
        cy.get('#password').type(pass)
        cy.get('#password-confirmation').type(confirmPass)
        cy.get('.action.submit.primary').click()
    
    })

    Cypress.Commands.add('login',(email,password) => {
         cy.get('#email').type(email)
         cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
         cy.get('#send2').click()
    })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })