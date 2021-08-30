import { When, Then } from "cypress-cucumber-preprocessor/steps";

const newStatus = 'Active'

//
// When('I enter all the Status information and hit submit', () => {
//   cy.get('#name').type(newStatus)
//   cy.get('#name').wait(5)
//   cy.get('#btn-submit').click()
// })
//
// When('I do not enter the Status Name field', () => {
//   // cy.get('#name').type(newStatus)
//   cy.get('#name').wait(1)
//   // cy.get('#btn-submit').click()
// })
//
// Then('the Status is created', () => {
//   // cy.get('#btn-statuses-home').click()
//   cy.get('#display-new-Status').contains(newStatus).should('be.visible')
// })
//
// Then('the Submit button is disabled', () => {
//   cy.get('#btn-submit').should('be.disabled')
// })
//
// Then('I will see all Statuss', () => {
//   cy.get('#displaystatuss').contains('SDET')
//   cy.get('#displaystatuss').contains('Agile')
//   cy.get('#displaystatuss').contains('Development')
//   cy.get('#displaystatuss').contains('DevOps')
// })
// When( 'I click on a specific Status', () => {
//   cy.get(`#status-1`).click()
// })
// Then( 'I will be on the specific Status Home page', () => {
//   cy.get('#status-1-home').contains('SDET Details')
// })
