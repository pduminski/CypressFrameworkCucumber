import homePage from "../pageObjects/homePage";
/// <reference types="cypress" />

export class Actions {
  visitHomepage() {
    cy.visit("/");
  }

  clickHeader(headerName) {
    cy.get(headerName).invoke("removeAttr", "target").click();
  }
}

export const homepageActions = new Actions();
