import { When, And } from "cypress-cucumber-preprocessor/steps";

When('I {string} all the {string} information and hit submit', (enter, entity) => {

  if (enter.includes('do not')){
    cy.get('#name').wait(5)
  } else {
    switch(entity){
      case 'Client':
        const newClient = 'Grange'
        cy.get('#name').type(newClient)
        break;
      case 'Practice':
        cy.get('#name').type('UI/UX')
        break;
      case 'Region':
        cy.get('#name').type('South America')
        break;
      case 'Role':
        cy.get('#name').type('Big Boss Man')
        break;
      case 'Status':
        cy.get('#name').type('drunk')
        break;
      case 'User':
        cy.get('#name').type('Marc Cruz')
        break;
      default:
        cy.get('#name').type('')
    }
    cy.get('#btn-submit').click()
  }
})

When('I do not enter the Client Name field', () => {
  cy.get('#name').wait(1)
})
