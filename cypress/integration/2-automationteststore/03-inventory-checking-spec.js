import MainPage from '../../support/page-objects/02-automation/mainPage';
import ShoppingPage from '../../support/page-objects/02-automation/shoppingPage';

describe('Automation school test', () => {
	beforeEach(() => {
		cy.openHomePage();
	});
	it('Should order items and get confirmation', () => {
		MainPage.checkInventoryIsEmpty();
		MainPage.searchAndSelect();
		ShoppingPage.checkInventoryCount();
	});
});
