import { When, Then } from "cypress-cucumber-preprocessor/steps";

const newClient = 'Grange'

When('I enter all the Client information and hit submit', () => {
  cy.get('#name').type(newClient)
  cy.get('#name').wait(5)
  cy.get('#btn-submit').click()
})

When('I do not enter the Client Name field', () => {
  // cy.get('#name').type(newClient)
  cy.get('#name').wait(1)
  // cy.get('#btn-submit').click()
})

Then('the Client is created', () => {
  // cy.get('#btn-clients-home').click()
  cy.get('#display-new-client').contains(newClient).should('be.visible')
})

Then('the Submit button is disabled', () => {
  cy.get('#btn-submit').should('be.disabled')
})

Then('I will see all Clients', () => {
  cy.get('#displayclients').contains('SDET')
  cy.get('#displayclients').contains('Agile')
  cy.get('#displayclients').contains('Development')
  cy.get('#displayclients').contains('DevOps')
})
When( 'I click on a specific Client', () => {
  cy.get(`#client-1`).click()
})
Then( 'I will be on the specific Client Home page', () => {
  cy.get('#client-1-home').contains('SDET Details')
})
