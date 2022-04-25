const firstName = '#guestFrm_firstname';
const lastName = '#guestFrm_lastname';
const email = '#guestFrm_email';
const address = '#guestFrm_address_1';
const city = '#guestFrm_city';
const province = '#guestFrm_zone_id';
const postalCode = '#guestFrm_postcode';
const firstNameValue = 'Test';
const lastNameValue = 'User';
const emailValue = 'test@user.com';
const addressValue = 'Test Address';
const cityValue = 'Test City';
const provinceValue = '3514';
const postalCodeValue = '12345';
const messageInfo = '.help-block';
const firstNameInfoMessage =
	'First Name must be greater than 3 and less than 32 characters!';
const lastNameInfoMessage =
	'Last Name must be greater than 3 and less than 32 characters!';
const emailInfoMessage = 'E-Mail Address does not appear to be valid!';
const addressInfoMessage =
	'Address 1 must be greater than 3 and less than 128 characters!';
const cityInfoMessage =
	'City must be greater than 3 and less than 128 characters!';
const regionInfoMessage = 'Please select a region / state!';
const postalCodeInfoMessage =
	'Zip/postal code must be between 3 and 10 characters!';
const valueToLong =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en';
const valueToShort = 'ab';
const valueCorrect = 'Lorem ipsum dolor sit amet';
const wrongEmail = 'email@com';

export default class GuestCheckoutPage {
	static fillTheForm() {
		cy.get(firstName).type(firstNameValue);
		cy.get(lastName).type(lastNameValue);
		cy.get(email).type(emailValue);
		cy.get(address).type(addressValue);
		cy.get(city).type(cityValue);
		cy.get(province).select(provinceValue);
		cy.get(postalCode).type(postalCodeValue);
		cy.findAllByText('Continue').click();
	}
	static checkFirstNameFieldToShort() {
		cy.get(firstName).clear();
		cy.get(firstName).type(valueToShort);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(0).should('have.text', firstNameInfoMessage);
	}
	static checkFirstNameFieldToLong() {
		cy.get(firstName).clear();
		cy.get(firstName).type(valueToLong);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(0).should('have.text', firstNameInfoMessage);
	}
	static checkFirstNameFieldCorrect() {
		cy.get(firstName).clear();
		cy.get(firstName).type(valueCorrect);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(0).should('not.have.text', firstNameInfoMessage);
	}
	static checkLastNameFieldToShort() {
		cy.get(lastName).clear();
		cy.get(lastName).type(valueToShort);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(1).should('have.text', lastNameInfoMessage);
	}
	static checkLastNameFieldToLong() {
		cy.get(lastName).clear();
		cy.get(lastName).type(valueToLong);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(1).should('have.text', lastNameInfoMessage);
	}
	static checkLastNameFieldCorrect() {
		cy.get(lastName).clear();
		cy.get(lastName).type(valueCorrect);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(1).should('not.have.text', lastNameInfoMessage);
	}
	static checkEmailFieldIsIncorrect() {
		cy.get(email).clear();
		cy.get(email).type(wrongEmail);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(2).should('have.text', emailInfoMessage);
	}
	static checkEmailFieldIsCorrect() {
		cy.get(email).clear();
		cy.get(email).type(emailValue);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(2).should('not.have.text', emailInfoMessage);
	}
	static checkAddressIsToShort() {
		cy.get(address).clear();
		cy.get(address).type(valueToShort);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(6).should('have.text', addressInfoMessage);
	}
	static checkAddressIsToLong() {
		cy.get(address).clear();
		cy.get(address).type(valueToLong);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(6).should('have.text', addressInfoMessage);
	}
	static checkAddressIsCorrect() {
		cy.get(address).clear();
		cy.get(address).type(valueCorrect);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(6).should('not.have.text', addressInfoMessage);
	}
	static checkCityIsToShort() {
		cy.get(city).clear();
		cy.get(city).type(valueToShort);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(8).should('have.text', cityInfoMessage);
	}
	static checkCityIsToLong() {
		cy.get(city).clear();
		cy.get(city).type(valueToLong);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(8).should('have.text', cityInfoMessage);
	}
	static checkCityIsCorrect() {
		cy.get(city).clear();
		cy.get(city).type('London');
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(8).should('not.have.text', cityInfoMessage);
	}
	static checkIfRegionIsNotSelected() {
		cy.get(province);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(9).should('have.text', regionInfoMessage);
	}
	static checkIfRegionIsSelected() {
		cy.get(province).select(provinceValue);
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(9).should('not.have.text', regionInfoMessage);
	}
	static checkIfPostalCodeIsToShort() {
		cy.get(postalCode).clear();
		cy.get(postalCode).type('12');
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(10).should('have.text', postalCodeInfoMessage);
	}
	static checkIfPostalCodeIsToLong() {
		cy.get(postalCode).clear();
		cy.get(postalCode).type('12345678901');
		cy.findAllByText('Continue').click();
		cy.get(messageInfo).eq(10).should('have.text', postalCodeInfoMessage);
	}
	static checkIfPostalCodeIsCorrect() {
		cy.get(postalCode).clear();
		cy.get(postalCode).type(postalCodeValue);
		cy.findAllByText('Continue').click();
		cy.contains(' Checkout Confirmation').should('exist');
	}
}
