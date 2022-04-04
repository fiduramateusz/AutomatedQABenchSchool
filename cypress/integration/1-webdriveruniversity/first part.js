/// <reference types="cypress" />

describe('Automation school test', () => {
	context('Contact us', () => {
		beforeEach(() => {
			cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
		});
		it('Should fill all data in Contact us form and reset data', () => {
			cy.get('input[name=first_name]')
				.type('Adam')
				.should('have.value', 'Adam');
			cy.get('input[name=last_name]')
				.type('Abacki')
				.should('have.value', 'Abacki');
			cy.get('input[name=email]')
				.type('fake@email.com')
				.should('have.value', 'fake@email.com');
			cy.get('textarea[name=message]')
				.type('This is a sample text in comment box')
				.should('have.value', 'This is a sample text in comment box');
			cy.get('input[type=reset]').click();
			cy.get('input[name=first_name]').should('have.value', '');
			cy.get('input[name=last_name]').should('have.value', '');
			cy.get('input[name=email]').should('have.value', '');
			cy.get('textarea[name=message]').should('have.value', '');
		});
		it('Should return an error that all fields are required', () => {
			cy.get('input[name=first_name]')
				.type('Adam')
				.should('have.value', 'Adam');
			cy.get('input[type=submit]').click();
			cy.get('body').should('contain', 'Error: all fields are required');
		});
		it('Should return an error that email is invalid', () => {
			cy.get('input[name=first_name]').type('Adam');
			cy.get('input[name=last_name]').type('Abacki');
			cy.get('input[name=email]').type('wrongemail.com');
			cy.get('textarea[name=message]').type('Test');
			cy.get('input[type=submit]').click();
			cy.get('body').should('contain', 'Error: Invalid email address');
		});
		it('Should return a succes message', () => {
			cy.get('input[name=first_name]').type('Adam');
			cy.get('input[name=last_name]').type('Abacki');
			cy.get('input[name=email]').type('correctemail@domain.com');
			cy.get('textarea[name=message]').type('Test comment');
			cy.get('input[type=submit]').click();
			cy.get('#contact_reply > h1').should(
				'contain',
				'Thank You for your Message!'
			);
		});
	});

	context('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {
		beforeEach(() => {
			cy.visit(
				'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
			);
		});

		it('Should check all data from the dropdowns', () => {
			cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#');
			cy.get('#dropdowm-menu-1')
				.select('python')
				.should('have.value', 'python');
			cy.get('#dropdowm-menu-1').select('sql').should('have.value', 'sql');
			cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
			cy.get('#dropdowm-menu-2')
				.select('testng')
				.should('have.value', 'testng');
			cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit');
			cy.get('#dropdowm-menu-3').select('css').should('have.value', 'css');
			cy.get('#dropdowm-menu-3')
				.select('javascript')
				.should('have.value', 'javascript');
			cy.get('#dropdowm-menu-3')
				.select('jquery')
				.should('have.value', 'jquery');
		});
		it('Should check all checkboxes', () => {
			cy.get('input[value=option-1').check().should('be.checked');
			cy.get('input[value=option-2').check().should('be.checked');
			cy.get('input[value=option-4').check().should('be.checked');
			cy.get('input[value=option-2').uncheck().should('not.be.checked');
			cy.get('input[value=option-4').uncheck().should('not.be.checked');
		});
		it('Should check all radiobuttons', () => {
			cy.get('input[value=green]').check().should('be.checked');
			cy.get('input[value=blue]').check().should('be.checked');
			cy.get('input[value=yellow]').check().should('be.checked');
			cy.get('input[value=orange]').check().should('be.checked');
			cy.get('input[value=purple]').check().should('be.checked');
		});
	});
	context('Datepicker', () => {
		beforeEach(() => {
			cy.visit('https://webdriveruniversity.com/Datepicker/index.html');
		});

		it('Should check date in datepicker', () => {
			cy.get('input[type=text]').click();
			// cy.get('').click();
		});
	});
	context('Autocomplete TextField', () => {
		beforeEach(() => {
			cy.visit(
				'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'
			);
		});

		it('Should check autocomplete', () => {
			cy.get('#myInput').type('chi');
			cy.get('#myInputautocomplete-list > div:nth-child(2)').click();
			cy.get('#myInput').should('have.value', 'Chips');
		});
	});
	context('Ajax-Loader', () => {
		beforeEach(() => {
			cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html');
		});
		


	});
	
});

//body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(2) > td.today.active.day
