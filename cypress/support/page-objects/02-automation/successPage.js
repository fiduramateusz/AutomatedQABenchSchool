const successMessage = '.maintext';
const successMessageValue = ' Your Order Has Been Processed!';

export default class SuccessPage {
	static getSuccessMessage() {
		cy.get(successMessage).should('have.text', successMessageValue);
	}
	static clickContinueButton() {
		cy.findAllByText('Continue').click();
	}
}
