

export default class SubNavbar {

	static navigateToSelectTshirt() {
		cy.findAllByText('Apparel & accessories').eq(1).click()
		cy.findAllByText('T-shirts').eq(2).click()
		cy.findAllByTitle('Add to Cart').eq(0).click()
		cy.get('#option352').select('780')
		cy.get('.productpagecart').click()

	}
	static navigateToSelectShoes() {
		cy.findAllByText('Apparel & accessories').eq(1).click()
		cy.findAllByText('Shoes').eq(2).click()
		cy.findAllByTitle('Add to Cart').eq(0).click()
		cy.get('#option344747').check()
		cy.get('.productpagecart').click()

	}
	
}

