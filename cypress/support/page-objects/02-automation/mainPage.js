const productValue = 'Acqua Di Gio Pour Homme';
const searchButton = '.button-in-search'
const cartButton = '.cart'
const inventoryCounter = 'a > span.label.label-orange.font14'

export default class MainPage {
	static searchAndSelect() {
		cy.findByPlaceholderText('Search Keywords').type(productValue);
		cy.get(searchButton).click();
		cy.get(cartButton).click();
	}
	static checkInventoryIsEmpty() {
		cy.get(inventoryCounter).should('have.text', 0)
	}
}
