const firstNameInput = 'input[name=first_name]';
const lastNameInput = 'input[name=last_name]';
const emailInput = 'input[name=email]';
const commentInput = 'textarea[name=message]';
const buttonReset = 'input[type=reset]';
const firstNameValue = 'Jhon';
const lastNameValue = 'Doe';
const correctEmailValue = 'correct.email@test.com';
const incorrectEmailValue = 'incorrect.emailtest.com';
const commentValue = 'Test comment';

export default class Contact {
	static typeFirstName() {
		cy.get(firstNameInput).type(firstNameValue).should('have.value', firstNameValue);
	}
	static typeLastName() {
		cy.get(lastNameInput).type(lastNameValue).should('have.value', lastNameValue);
	}
	static typeCorrectEmail() {
		cy.get(emailInput).type(correctEmailValue).should('have.value', correctEmailValue);
	}
	static typeIncorrectEmail() {
		cy.get(emailInput).type(incorrectEmailValue).should('have.value', incorrectEmailValue);
	}
	static typeComment() {
		cy.get(commentInput).type(commentValue).should('have.value', commentValue);
	}
	static clickResetButton() {
		cy.get(buttonReset).click()
	}

}
