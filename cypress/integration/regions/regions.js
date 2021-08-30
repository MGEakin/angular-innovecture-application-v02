import { When, Then } from "cypress-cucumber-preprocessor/steps";

const newRegion = 'South America'

// When('I enter all the Region information and hit submit', () => {
//   cy.get('#name').type(newRegion)
//   cy.get('#name').wait(5)
//   cy.get('#btn-submit').click()
// })
//
// When('I do not enter the Region Name field', () => {
//   // cy.get('#name').type(newRegion)
//   cy.get('#name').wait(1)
//   // cy.get('#btn-submit').click()
// })
//
// Then('the Region is created', () => {
//   // cy.get('#btn-regions-home').click()
//   cy.get('#display-new-region').contains(newRegion).should('be.visible')
// })
//
// Then('the Submit button is disabled', () => {
//   cy.get('#btn-submit').should('be.disabled')
// })
//
// Then('I will see all Regions', () => {
//   cy.get('#displayregions').contains('SDET')
//   cy.get('#displayregions').contains('Agile')
//   cy.get('#displayregions').contains('Development')
//   cy.get('#displayregions').contains('DevOps')
// })
// When( 'I click on a specific Region', () => {
//   cy.get(`#region-1`).click()
// })
// Then( 'I will be on the specific Region Home page', () => {
//   cy.get('#region-1-home').contains('SDET Details')
// })
