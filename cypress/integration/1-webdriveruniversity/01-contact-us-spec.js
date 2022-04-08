/// <reference types="cypress" />

const url1 = Cypress.env('url1');
const emailLocator = 'input[name=email]';
const validEmail = 'valid.email@fake.com';
const invalidEmail = 'invalid.emailfake.com';
const title = 'CONTACT US';
const pageTitle = 'WebDriver | Contact Us';
const commentValue = 'Test comment';
const commentLocator = 'textarea[name=message]';
const buttonSubmit = 'input[type=submit]';
const replayMessage = '#contact_reply > h1';
const replayContent = 'Thank You for your Message!';
const firstNameValue = 'Adam';
const firstNameLocator = 'input[name=first_name]';
const lastNameValue = 'Abacki';
const lastNameLocator = 'input[name=last_name]';
const buttonReset = 'input[type=reset]';
const errorFieldsRequired = 'Error: all fields are required';
const errorInvalidEmail = 'Error: Invalid email address';

describe('Contact Us', () => {
	beforeEach(() => {
		cy.visit(url1);
	});

	it('Should check title', () => {
		cy.title().should('eq', pageTitle);
		cy.findByText(title).should('exist');
	});
	it('Should fill all data in Contact us form and reset data', () => {
		cy.get(firstNameLocator)
			.type(firstNameValue)
			.should('have.value', firstNameValue);
		cy.get(lastNameLocator)
			.type(lastNameValue)
			.should('have.value', lastNameValue);
		cy.get(emailLocator).type(validEmail).should('have.value', validEmail);
		cy.get(commentLocator)
			.type(commentValue)
			.should('have.value', commentValue);
		cy.get(buttonReset).click();
		cy.get(firstNameLocator).should('have.value', '');
		cy.get(lastNameLocator).should('have.value', '');
		cy.get(emailLocator).should('have.value', '');
		cy.get(commentLocator).should('have.value', '');
	});
	it('Should return an error that all fields are required', () => {
		cy.get(firstNameLocator)
			.type(firstNameValue)
			.should('have.value', firstNameValue);
		cy.get(buttonSubmit).click();
		cy.get('body').should('contain', errorFieldsRequired);
	});
	it('Should return an error that email is invalid', () => {
		cy.get(firstNameLocator).type(firstNameValue);
		cy.get(lastNameLocator).type(lastNameValue);
		cy.get(emailLocator).type(invalidEmail);
		cy.get(commentLocator).type(commentValue);
		cy.get(buttonSubmit).click();
		cy.get('body').should('contain', errorInvalidEmail);
	});
	it('Should return a succes message', () => {
		cy.get(firstNameLocator).type(firstNameValue);
		cy.get(lastNameLocator).type(lastNameValue);
		cy.get(emailLocator).type(validEmail);
		cy.get(commentLocator).type(commentValue);
		cy.get(buttonSubmit).click();
		cy.get(replayMessage).should('contain', replayContent);
	});
});
