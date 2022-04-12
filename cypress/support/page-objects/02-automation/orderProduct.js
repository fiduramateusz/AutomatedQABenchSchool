const appAndAccTab = 'Apparel & accessories';
const tShirtsMenu = 'T-shirts';
const tShirtsProduct = '#option352';
const tShirtsProductVaue = '780';
const shoesMenu = 'Shoes';
const shoesProduct = '#option344747';
const addToCartButton = 'Add to Cart';
const pageCartButton = '.productpagecart';

export default class OrderProduct {
	static navigateToSelectTshirt() {
		cy.findAllByText(appAndAccTab).eq(1).click();
		cy.findAllByText(tShirtsMenu).eq(2).click();
		cy.findAllByTitle(addToCartButton).eq(0).click();
		cy.get(tShirtsProduct).select(tShirtsProductVaue);
		cy.get(pageCartButton).click();
	}
	static navigateToSelectShoes() {
		cy.findAllByText(appAndAccTab).eq(1).click();
		cy.findAllByText(shoesMenu).eq(2).click();
		cy.findAllByTitle(addToCartButton).eq(0).click();
		cy.get(shoesProduct).check();
		cy.get(pageCartButton).click();
	}
}
