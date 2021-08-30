import {Given, When} from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/dashboard'

Given('I navigate to the {string} Home page', (home_page) => {
  cy.visit(url);
  cy.get(`#btn-${home_page.toLowerCase()}-home`).click()
})

Given('I navigate to the Create {string} page', (entity) => {
  // const url = 'http://localhost:4200/dashboard'
  cy.visit(url);
  cy.get(`#btn-${entity.toLowerCase()}-home`).click()
  cy.get(`#btn-${entity.toLowerCase()}-add`).click()
})
When( 'I click on a specific {string}', (entity) => {
  cy.get(`#${entity.toLowerCase()}-1`).click()
})
