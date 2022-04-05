export default class Navbar {
	apparelAndAccessoriesPage() {
		cy.get('#categorymenu > nav > ul > li:nth-child(2) > a').click();
	}


}

export const navigateTo = new Navbar();
