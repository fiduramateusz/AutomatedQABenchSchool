declare namespace Cypress {
	interface Chainable {
		/**
		 * Navigate to the home page of our website
		 */
		visitHomePage(): Chainable<Element>;
		/**
		 * Navigate to the login page of our website
		 */
		visitLoginPage(): Chainable<Element>;
		/**
		 * Navigate to the feedback page of our website
		 */
		visitFeedbackPage(): Chainable<Element>;
		/**
		 * @param seconds - how many seconds should the execution wait
		 */
		waitForSecond(seconds: number): Chainable<Element>;
	}
}

Cypress.Commands.add('visitHomePage', () => {
	cy.visit('http://zero.webappsecurity.com/');
});
Cypress.Commands.add('visitLoginPage', () => {
	cy.visit('http://zero.webappsecurity.com/login.html');
});
Cypress.Commands.add('visitFeedbackPage', () => {
	cy.visit('http://zero.webappsecurity.com/feedback.html');
});
Cypress.Commands.add('waitForSecond', (seconds) => {
	cy.wait(seconds * 1000)
});

