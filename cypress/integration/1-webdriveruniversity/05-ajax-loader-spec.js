/// <reference types="cypress" />

const url5 = Cypress.env('url5');
const buttonClikMe = '#myDiv';
const buttonValue = 'CLICK ME!'

describe('Ajax-Loader', () => {
	beforeEach(() => {
		cy.visit(url5);
	});
	it('Should wait for button Click me', () => {
		cy.get(buttonClikMe, { timeout: 6000 })
			.should('be.visible')
			.and('contain', buttonValue);
		cy.get(buttonClikMe).click()
		cy.get('.modal-title').should('have.text','Well Done For Waiting....!!!')
	});
});
