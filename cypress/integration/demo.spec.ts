describe('Demo Test', () => {
	it('Should visit a website', () => {
		cy.visitHomePage();
		cy.visitLoginPage();
        cy.waitForSecond(5)
		cy.fixture('loginData').then(({ username, password }) => {
			cy.login(username, password);
		});
	});
});
