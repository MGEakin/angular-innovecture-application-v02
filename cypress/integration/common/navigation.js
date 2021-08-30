import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the {string} Home page', (practice_home) => {
  const url = 'http://localhost:4200/dashboard'
  cy.visit(url);
  cy.get(`#btn-${practice_home.toLowerCase()}-home`).click()
})

Given('I navigate to the Create {string} page', (practice_create) => {
  const url = 'http://localhost:4200/dashboard'
  cy.visit(url);
  cy.get(`#btn-${practice_create.toLowerCase()}-home`).click()
  cy.get(`#btn-${practice_create.toLowerCase()}-add`).click()
})
