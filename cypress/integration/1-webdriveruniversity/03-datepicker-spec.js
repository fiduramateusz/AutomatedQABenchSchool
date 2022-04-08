/// <reference types="cypress" />
const url3 = Cypress.env('url3');
const datePicker = 'input[type=text]'
const dateValue = 'body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days'
const date = '04-06-2022'

describe('Datepicker', () => {
    beforeEach(() => {
        cy.visit(url3);
    });

    it('Should check date in datepicker', () => {
        cy.get(datePicker).click();
        cy.get(dateValue)
            .contains('6')
            .click();
        cy.get(datePicker).should('have.value', date);
    });
});