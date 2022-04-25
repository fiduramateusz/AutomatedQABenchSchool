/// <reference types="cypress" />

import FirstCheckoutPage from '../../support/page-objects/02-automation/firstCheckoutPage';
import GuestCheckoutPage from '../../support/page-objects/02-automation/guestCheckoutPage';
import MainPage from '../../support/page-objects/02-automation/mainPage';
import ShoppingPage from '../../support/page-objects/02-automation/shoppingPage';

describe('Automation school test', () => {
	beforeEach(() => {
		cy.openHomePage();
	});
	it('Should validate the form', () => {
		MainPage.searchAndSelect();
		ShoppingPage.checkoutOrder();
		FirstCheckoutPage.guestCheckout();
		GuestCheckoutPage.checkFirstNameFieldToShort();
		GuestCheckoutPage.checkFirstNameFieldToLong();
		GuestCheckoutPage.checkFirstNameFieldCorrect();
		GuestCheckoutPage.checkLastNameFieldToShort();
		GuestCheckoutPage.checkLastNameFieldToLong();
		GuestCheckoutPage.checkLastNameFieldCorrect();
		GuestCheckoutPage.checkEmailFieldIsIncorrect();
		GuestCheckoutPage.checkEmailFieldIsCorrect();
		GuestCheckoutPage.checkAddressIsToShort();
		GuestCheckoutPage.checkAddressIsToLong();
		GuestCheckoutPage.checkAddressIsCorrect();
		GuestCheckoutPage.checkCityIsToShort();
		GuestCheckoutPage.checkCityIsToLong();
		GuestCheckoutPage.checkCityIsCorrect();
		GuestCheckoutPage.checkIfRegionIsNotSelected();
		GuestCheckoutPage.checkIfRegionIsSelected();
		GuestCheckoutPage.checkIfPostalCodeIsToShort();
		GuestCheckoutPage.checkIfPostalCodeIsToLong();
		GuestCheckoutPage.checkIfPostalCodeIsCorrect();
	});
});
