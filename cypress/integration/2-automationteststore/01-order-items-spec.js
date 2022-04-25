/// <reference types="cypress" />

import { ConfimationPage } from '../../support/page-objects/02-automation/confirmationPage';
import FirstCheckoutPage from '../../support/page-objects/02-automation/firstCheckoutPage';
import GuestCheckoutPage from '../../support/page-objects/02-automation/guestCheckoutPage';
import MainPage from '../../support/page-objects/02-automation/mainPage';
import OrderProduct from '../../support/page-objects/02-automation/orderProduct';
import ShoppingPage from '../../support/page-objects/02-automation/shoppingPage';
import SuccessPage from '../../support/page-objects/02-automation/successPage';

describe('Automation school test', () => {
	beforeEach(() => {
		cy.openHomePage();
	});
	it('Should order items and get confirmation', () => {
		OrderProduct.navigateToSelectTshirt();
		OrderProduct.navigateToSelectShoes();
		MainPage.searchAndSelect();
		ShoppingPage.checkoutOrder();
		FirstCheckoutPage.guestCheckout();
		GuestCheckoutPage.fillTheForm();
		ConfimationPage.checkoutOrder();
		SuccessPage.getSuccessMessage();
	});
});
