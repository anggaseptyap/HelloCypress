const { forEach } = require('lodash')

describe('login', () => {
  const loginData = require ('../../fixtures/loginData.json')
  const accountData = require ('../../fixtures/accountData.json')

  beforeEach(() => {
    cy.visit('')
  })
  it('login success', () => {
    cy.visit('')
    cy.contains('Sign In').click()
    cy.contains('Customer Login').should('be.visible')
    cy.login(loginData.valid.username,loginData.valid.password)
    cy.contains('Welcome, ').should('be.visible')
  })
  it.only('login Invalid', () => {
    cy.visit('')
    cy.contains('Sign In').click()
    cy.contains('Customer Login').should('be.visible')
    cy.fixture('loginData.json').then((user) =>
      user.invalid.forEach((data) =>{
        cy.login(data.username,data.password)
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible')
      })
    )
  })
})