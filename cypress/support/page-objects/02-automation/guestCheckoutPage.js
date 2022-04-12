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
}
