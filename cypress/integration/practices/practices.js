import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/dashboard'
const newPractice = 'UI/UX'

Given('I navigate to the Practice Home Page', () => {
  cy.visit(url);
  cy.get('#btn-practices-home').click()
})
Given('I navigate to the Create Practice page', () => {
  cy.visit(url);
  cy.get('#btn-practices-home').click()
  cy.get('#btn-practice-add').click()
})

When('I enter all the Practice information', () => {
  cy.get('#name').type(newPractice)
  cy.get('#name').wait(5)
  cy.get('#btn-submit').click()
})

Then('the Practice is created', () => {
  // cy.get('#btn-practices-home').click()
  cy.get('#display-new-practice').contains(newPractice).should('be.visible')

})
