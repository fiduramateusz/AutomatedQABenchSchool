

class contact {
	getFirtName() {
		return cy.get('input[name=first_name]');
	}
	getLastName() {
		return cy.get(lastNameLocator);
	}
}
export default contact;
