import { When, Then } from "cypress-cucumber-preprocessor/steps";

const newRole = 'UI/UX'

When('I enter all the Role information and hit submit', () => {
  cy.get('#name').type(newRole)
  cy.get('#name').wait(5)
  cy.get('#btn-submit').click()
})

When('I do not enter the Role Name field', () => {
  // cy.get('#name').type(newRole)
  cy.get('#name').wait(1)
  // cy.get('#btn-submit').click()
})

Then('the Role is created', () => {
  // cy.get('#btn-roles-home').click()
  cy.get('#display-new-role').contains(newRole).should('be.visible')
})

Then('the Submit button is disabled', () => {
  cy.get('#btn-submit').should('be.disabled')
})

Then('I will see all Roles', () => {
  cy.get('#displayroles').contains('SDET')
  cy.get('#displayroles').contains('Agile')
  cy.get('#displayroles').contains('Development')
  cy.get('#displayroles').contains('DevOps')
})
When( 'I click on a specific Role', () => {
  cy.get(`#role-1`).click()
})
Then( 'I will be on the specific Role Home page', () => {
  cy.get('#role-1-home').contains('SDET Details')
})
