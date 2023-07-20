import { homepageActions } from "../actions/homepageActions";
import { loginActions } from "../actions/loginActions";
import homePage from "../pageObjects/homePage";

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

Given("I access WebdriverUniversity Login Portal page", () => {
  homepageActions.visitHomepage();
  homepageActions.clickHeader(homePage.loginPortalHeader);
});

When("I enter a username {word}", (userName) => {
  loginActions.provideUsername(userName);
});

And("I enter a password {word}", (password) => {
  loginActions.providePassword(password);
});

And("I click the login button", () => {
  loginActions.clickLoginButton();
  cy.on("window:alert", stub);
});

Then(
  "I should be presented with the following message {word} {word}",
  (message, message2) => {
    const expectedMessage = message + " " + message2;
    cy.log(expectedMessage);
    cy.log(stub.getCall(0));
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
  }
);
