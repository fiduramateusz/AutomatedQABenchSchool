const productValue = 'Acqua Di Gio Pour Homme';
const searchButton = '.button-in-search'
const cartButton = '.cart'

export default class MainPage {
	static searchAndSelect() {
		cy.findByPlaceholderText('Search Keywords').type(productValue);
		cy.get(searchButton).click();
		cy.get(cartButton).click();
	}
}
