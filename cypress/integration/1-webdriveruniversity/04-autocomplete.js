/// <reference types="cypress" />

const url4 = Cypress.env('url4');
const myInput = '#myInput';
const myList = '#myInputautocomplete-list > div:nth-child(2)';
const listValue = 'Chips';
const typedItem = 'chi';

describe('Autocomplete TextField', () => {
	beforeEach(() => {
		cy.visit(url4);
	});
	it('Should check autocomplete', () => {
		cy.get(myInput).type(typedItem);
		cy.get(myList).click();
		cy.get(myInput).should('have.value', listValue);
	});
});
