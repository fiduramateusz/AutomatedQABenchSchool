/// <reference types="cypress" />

const url2 = Cypress.env('url2');
const dropdownMenuFirst = '#dropdowm-menu-1';
const dropdownMenuSecond = '#dropdowm-menu-2';
const dropdownMenuThird = '#dropdowm-menu-3';
const cSharp = 'c#';
const python = 'python';
const sql = 'sql';
const maven = 'maven';
const testng = 'testng';
const junit = 'junit';
const css = 'css';
const javascript = 'javascript';
const jquery = 'jquery';
const checkBoxOne = 'input[value=option-1';
const checkBoxTwo = 'input[value=option-2';
const checkBoxFour = 'input[value=option-4';
const radioGreen = 'input[value=green]';
const radioBlue = 'input[value=blue]';
const radioYellow = 'input[value=yellow]';
const radioOrange = 'input[value=orange]';
const radioPurple = 'input[value=purple]';


describe('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {
	beforeEach(() => {
		cy.visit(url2);
	});
	it('Should check all data from the dropdowns', () => {
		cy.get(dropdownMenuFirst).select(cSharp).should('have.value', cSharp);
		cy.get(dropdownMenuFirst).select(python).should('have.value', python);
		cy.get(dropdownMenuFirst).select(sql).should('have.value', sql);
		cy.get(dropdownMenuSecond).select(maven).should('have.value', maven);
		cy.get(dropdownMenuSecond).select(testng).should('have.value', testng);
		cy.get(dropdownMenuSecond).select(junit).should('have.value', junit);
		cy.get(dropdownMenuThird).select(css).should('have.value', css);
		cy.get(dropdownMenuThird)
			.select(javascript)
			.should('have.value', javascript);
		cy.get(dropdownMenuThird).select(jquery).should('have.value', jquery);
	});
	it('Should check all checkboxes', () => {
		cy.get(checkBoxOne).check().should('be.checked');
		cy.get(checkBoxTwo).check().should('be.checked');
		cy.get(checkBoxFour).check().should('be.checked');
		cy.get(checkBoxTwo).uncheck().should('not.be.checked');
		cy.get(checkBoxFour).uncheck().should('not.be.checked');
	});
	it('Should check all radiobuttons', () => {
		cy.get(radioGreen).check().should('be.checked');
		cy.get(radioBlue).check().should('be.checked');
		cy.get(radioYellow).check().should('be.checked');
		cy.get(radioOrange).check().should('be.checked');
		cy.get(radioPurple).check().should('be.checked');
	});
});
