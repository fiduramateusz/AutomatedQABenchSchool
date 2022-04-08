/// <reference types="cypress" />

import SubNavbar from "../../support/page-objects/02-automation/subNavbar";


describe('Automation school test', () => {
	
		beforeEach(() => {
			cy.openHomePage();
		});
		it('Should order the items', () => {
			SubNavbar.navigateToSelectTshirt()
			SubNavbar.navigateToSelectShoes()

		});
});
