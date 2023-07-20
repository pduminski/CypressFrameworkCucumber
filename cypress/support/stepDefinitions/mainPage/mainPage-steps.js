import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
  cy.log("Executing before step");
  stub = cy.stub();
});

Given("I am on webdriveruniversity webpage", () => {
  cy.visit("http://www.webdriveruniversity.com/");
});

When("I click LOGIN PORTAL header", () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
});

Then("Login Portal page is present", () => {
  cy.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
});
