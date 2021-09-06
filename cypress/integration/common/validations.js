import { When, Then } from "cypress-cucumber-preprocessor/steps";

// Then('the {string} is created', (entity) => {
//   cy.get('#display-new-client').contains(entity).should('be.visible')
// })

Then('the Submit button is disabled', () => {
  cy.get('#btn-submit').should('be.disabled')
})

Then('the {string} is created', (entity) => {
  let newEntity = ''

  switch(entity){
    case 'Practice':
      newEntity = 'UI/UX'
      break;
    case 'User':
      newEntity = 'Marc Cruz'
      break;
    case 'Client':
      newEntity = 'Grange'
      break;
    case 'Status':
      newEntity = 'drunk'
      break;
    case 'Opening':
      newEntity = 'Agile Coach - OWG Team 1'
      break;
    case 'Region':
      newEntity = 'South America'
      break;
    case 'Role':
      newEntity = 'Big Boss Man'
      break;
    default:
      cy.get('#name').type('Matt')
      break;
  }
  // cy.get(`#${entity.toLowerCase()}-1-home`).click()
  cy.get(`#display-new-${entity.toLowerCase()}`).contains(newEntity).should('be.visible')
})

Then('I will see all {string}', (entity) => {
  switch(entity){
    case 'Practices':
      cy.get('#displaypractices').contains('SDET')
      cy.get('#displaypractices').contains('Agile')
      cy.get('#displaypractices').contains('Development')
      cy.get('#displaypractices').contains('DevOps')
      break;
    case 'Users':
      cy.get('#displayusers').contains('Matthew Eakin')
      cy.get('#displayusers').contains('Jack Warner')
      cy.get('#displayusers').contains('Tim Loree')
      break;
    case 'Clients':
      cy.get('#displayclients').contains('MMC')
      cy.get('#displayclients').contains('Amex')
      cy.get('#displayclients').contains('Honda')
      break;
    case 'Statuses':
      cy.get('#displaystatuses').contains('candidate')
      cy.get('#displaystatuses').contains('assigned')
      cy.get('#displaystatuses').contains('unAssigned')
      cy.get('#displaystatuses').contains('active')
      break;
    case 'Regions':
      cy.get('#displayregions').contains('Americas')
      cy.get('#displayregions').contains('APAC')
      cy.get('#displayregions').contains('Europe')
      break;
    case 'Roles':
      cy.get('#displayroles').contains('SDET Engineer')
      cy.get('#displayroles').contains('Sr SDET Engineer')
      cy.get('#displayroles').contains('Agile Coach')
      cy.get('#displayroles').contains('ScrumMaster')
      cy.get('#displayroles').contains('Practice Lead')
      cy.get('#displayroles').contains('Account Manager')
      break;
    default:
      cy.get('#name').type('Matt')
      break;
  }
})

Then( 'I will be on the specific {string} Home page', (entity) => {
  switch(entity){
    case 'Client':
      cy.get('#client-1-home').contains('MMC')
      break;
    case 'Practice':
      cy.get('#practice-1-home').contains('SDET')
      break;
    case 'Region':
      cy.get('#region-1-home').contains('AMERICAS')
      break;
    case 'Role':
      cy.get('#role-1-home').contains('SDET ENGINEER')
      break;
    case 'Status':
      cy.get('#status-1-home').contains('CANDIDATE')
      break;
    case 'User':
      cy.get('#user-1-home').contains('MATTHEW EAKIN')
      break;
    default:
      cy.get('#name').type('Matt')
      break;
  }
  // cy.get(`#${entity.toLowerCase()}-1-home`).click()
})

Then( 'I see the Region they belong in', () => {
  cy.get('#client-region').contains('Region: 3')

})

