/// <reference types="cypress" />

import { navigateTo } from '../../support/page-objects/02-automation/navBar';

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
