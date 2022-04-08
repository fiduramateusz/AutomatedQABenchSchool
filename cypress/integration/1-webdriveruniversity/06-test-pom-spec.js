/// <reference types="cypress" />

import Contact from "../../support/page-objects/01-webdriver/contact";

const url1 = Cypress.env('url1');
const firstNameInput = 'input[name=first_name]';
const lastNameInput = 'input[name=last_name]';
const emailInput = 'input[name=email]';
const commentInput = 'textarea[name=message]';

describe('Extra POM test', () => {
	beforeEach(() => {
		cy.visit(url1);
	});

	it('Should reset the form and check that fields are empty', () => {
		Contact.typeFirstName()
        Contact.typeLastName()
        Contact.typeCorrectEmail()
        Contact.typeComment()
        Contact.clickResetButton()
        cy.get(firstNameInput).should('have.value', '');
		cy.get(lastNameInput).should('have.value', '');
		cy.get(emailInput).should('have.value', '');
		cy.get(commentInput).should('have.value', '');
	});


});
