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

When('I enter all the Practice information and hit submit', () => {
  cy.get('#name').type(newPractice)
  cy.get('#name').wait(5)
  cy.get('#btn-submit').click()
})

When('I do not enter the Practice Name field', () => {
  // cy.get('#name').type(newPractice)
  cy.get('#name').wait(1)
  // cy.get('#btn-submit').click()
})

Then('the Practice is created', () => {
  // cy.get('#btn-practices-home').click()
  cy.get('#display-new-practice').contains(newPractice).should('be.visible')
})

Then('the Submit button is disabled', () => {
  cy.get('#btn-submit').should('be.disabled')
})

Then('I will see all Practices', () => {
  cy.get('#displaypractices').contains('SDET')
  cy.get('#displaypractices').contains('Agile')
  cy.get('#displaypractices').contains('Development')
  cy.get('#displaypractices').contains('DevOps')
})
