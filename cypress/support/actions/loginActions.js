import homePage from "../pageObjects/homePage";
import loginPage from "../pageObjects/loginPage";
import { globalActions } from "./globalActions";
/// <reference types="cypress" />

export class Actions {
  provideUsername(userName) {
    cy.get(loginPage.userNameInputField).type(userName);
  }

  providePassword(password) {
    cy.get(loginPage.passwordInputField).type(password);
  }

  clickLoginButton() {
    cy.get(loginPage.loginButton).click();
  }

  login(userName, password) {
    cy.get(loginPage.userNameInputField).type(userName);
    cy.get(loginPage.passwordInputField).type(password);
    cy.get(loginPage.loginButton).click();
  }
}

export const loginActions = new Actions();
