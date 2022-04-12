const continueButton = '#accountFrm_accountguest';

export default class FirstCheckoutPage {
	static guestCheckout() {
		cy.get(continueButton).check();
		cy.findAllByText('Continue').click();
	}
}
