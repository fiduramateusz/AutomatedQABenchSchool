const checkoutButton = '#cart_checkout1';

export default class ShoppingPage {
	static checkoutOrder() {
		cy.get(checkoutButton).click();
	}
}
