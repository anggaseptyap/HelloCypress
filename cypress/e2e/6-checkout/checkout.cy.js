describe("Checkout", () => {
  const addressData = require("../../fixtures/addressData.json");
  const accountData = require("../../fixtures/accountData.json");

  it("Checkout failed because shipping method uncheck", () => {
    cy.visit("radiant-tee.html");
    cy.get("#option-label-size-143-item-166").click();
    cy.get("#option-label-color-93-item-56").click();
    cy.get("#qty").clear().type(1);
    cy.get("#product-addtocart-button").click();
    cy.wait(5000);
    cy.get(".showcart").click();
    cy.get(".active").should("be.visible");
    cy.contains("Proceed to Checkout").click();
    cy.contains("Next").click();
    cy.contains(
      "The shipping method is missing. Select the shipping method and try again."
    ).should("be.visible");
  });

  it("Checkout failed because data is empty", () => {
    cy.visit("radiant-tee.html");
    cy.get("#option-label-size-143-item-166").click();
    cy.get("#option-label-color-93-item-56").click();
    cy.get("#qty").clear().type(1);
    cy.get("#product-addtocart-button").click();
    cy.wait(5000);
    cy.get(".showcart").click();
    cy.get(".active").should("be.visible");
    cy.contains("Proceed to Checkout").click();
    cy.get(".radio").check("flatrate_flatrate");
    cy.contains("Next").click();
    cy.contains("This is a required field.").should("be.visible");
  });

  it("Checkout without login", () => {
    cy.visit("radiant-tee.html");
    cy.get("#option-label-size-143-item-166").click();
    cy.get("#option-label-color-93-item-56").click();
    cy.get("#qty").clear().type(1);
    cy.get("#product-addtocart-button").click();
    cy.wait(5000);
    cy.get(".showcart").click();
    cy.get(".active").should("be.visible");
    cy.contains("Proceed to Checkout").click();
    cy.wait(5000);
    cy.get("#customer-email").clear().type("rafiramadhana@gmail.com");
    cy.fillAddress(
      addressData.firstName,
      addressData.lastName,
      addressData.company,
      addressData.streetAddress,
      addressData.city,
      addressData.postalCode,
      addressData.phoneNumber
    );
    cy.wait(5000);
    cy.contains("Next").click();
    cy.contains("Place Order").click();
    cy.contains("Thank you for your purchase!").should("be.visible");
  });

  it("Checkout with login", () => {
    cy.visit("radiant-tee.html");
    cy.get("#option-label-size-143-item-166").click();
    cy.get("#option-label-color-93-item-56").click();
    cy.get("#qty").clear().type(1);
    cy.get("#product-addtocart-button").click();
    cy.wait(5000);
    cy.get(".showcart").click();
    cy.get(".active").should("be.visible");
    cy.contains("Proceed to Checkout").click();
    cy.wait(5000);
    cy.get("#customer-email").clear().type(accountData.mail);
    cy.wait(5000);
    cy.get("#customer-password").clear().type(accountData.pass);
    cy.get(".primary > .login").click();
    cy.wait(5000);
    cy.contains("Next").click();
    cy.contains("Place Order").click();
    cy.contains("Thank you for your purchase!").should("be.visible");
  });
});
