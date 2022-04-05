/// <reference types="cypress" />

import { navigateTo } from '../../support/page-objects/navBar';

describe('Automation school test', () => {
	context.only('Automation Test Store', () => {
		beforeEach(() => {
			cy.openHomePage();
		});
		it('Should order the items', () => {
			navigateTo.apparelAndAccessoriesPage();
		
		});
	});
});
