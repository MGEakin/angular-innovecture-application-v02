import { When, And } from "cypress-cucumber-preprocessor/steps";
import {Opening} from "../../../src/app/opening";

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
        cy.get('#practice').select('Agile')
        cy.get('#role').select('Agile Coach')
        break;
      case 'Opening':
        cy.get('#title').type('Agile Coach - OWG Team 1')
        cy.get('#role').select('Agile Coach')
        cy.get('#new-date').type('08/08/2021')
        cy.get('#close-date').type('08/08/2021')
        cy.get('#rate').type('55')

        // this.model = new Opening( 1, 'MMC Agile Coach - Mercer', 3, this.newStartDate, this.newCloseDate, 55 );

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
