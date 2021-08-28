import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/dashboard'
Given('I navigate to the Practice Home Page', () => {
  cy.visit(url);
  cy.get('#btn-practices-home').click()
})
