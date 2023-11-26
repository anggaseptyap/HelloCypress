describe('Shopping Cart', () => {
  it('Verify Add to cart when size and color blank', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#product-options-wrapper')
    cy.get('#qty').clear().type(5)
    cy.get('#product-addtocart-button').click()
    cy.contains('This is a required field.').should('be.visible')
    cy.contains('This is a required field.').should('be.visible')


  
  })
  it('Success Add to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#option-label-size-143-item-167').click() // select size S
    cy.get('#option-label-color-93-item-50').click() // select color blue
    cy.get('#qty').clear().type(5)
    cy.get('#product-addtocart-button').click()
    cy.get('.minicart-wrapper')
    

  })
})

