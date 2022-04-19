const checkoutButton = '#checkout_btn'
export class ConfimationPage{
    static checkoutOrder() {
		cy.get(checkoutButton).click();
	}
}

