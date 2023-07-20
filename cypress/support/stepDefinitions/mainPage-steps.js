import { homepageActions } from "../actions/homepageActions";

import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";
import homePage from "../pageObjects/homePage";

Given("I am on webdriveruniversity webpage", () => {
  homepageActions.visitHomepage();
});

When("I click {string} header", (headerText) => {
  cy.contains("h1", headerText)
    .parents("a")
    .invoke("removeAttr", "target")
    .click({ force: true });
});

Then("I should land on the correct URL {string}", (substring) => {
  cy.url().should("include", substring);
});
