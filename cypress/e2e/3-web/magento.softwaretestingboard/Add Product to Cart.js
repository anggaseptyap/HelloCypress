describe('Product', () => {
  it('Verify Failed add product to cart when size and color blank', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#product-options-wrapper')
    cy.get('#qty').clear().type(5)
    cy.get('#product-addtocart-button').click()
    cy.contains('This is a required field.').should('be.visible')
    cy.contains('This is a required field.').should('be.visible')
  
  })
  it('Verify Success Add Product to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#option-label-size-143-item-167').click() // select size S
    cy.get('#option-label-color-93-item-50').click() // select color blue
    cy.get('#qty').clear().type(5)
    cy.get('#product-addtocart-button').click()
    cy.get('.minicart-wrapper')
    cy.get('#product-addtocart-button').click()
    cy.get('.counter-number').click()
    cy.focused().click() // Click on el with focus
    cy.contains('View and Edit Cart')
        .click({force: true})

  })
  it('Verify Success Add Multiple Product to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#option-label-size-143-item-167').click() // select size S
    cy.get('#option-label-color-93-item-50').click() // select color blue
    cy.get('#qty').clear().type(5)
    cy.get('#product-addtocart-button').click()
    cy.get('.minicart-wrapper')
    cy.get('.counter-number')
    cy.visit('https://magento.softwaretestingboard.com/breathe-easy-tank.html')
    cy.get('#option-label-size-143-item-168').click() // select size S
    cy.get('#option-label-color-93-item-60').click() // select color blue
    cy.get('#qty').clear().type(9)
    cy.get('#product-addtocart-button').click()
    cy.get('.minicart-wrapper')
    cy.get('.counter-number').click()
    cy.focused().click() // Click on el with focus
    cy.contains('View and Edit Cart')
        .click({force: true})
    
  })
})

