const checkoutButton = '#cart_checkout1';
const inventoryCounter = 'a > span.label.label-orange.font14';

export default class ShoppingPage {
	static checkoutOrder() {
		cy.get(checkoutButton).click();
	}
	static checkInventoryCount() {
		cy.get(inventoryCounter).should('have.text', 1);
	}
}
