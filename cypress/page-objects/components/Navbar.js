export default class Navbar {
	static clickOnLogo() {
		cy.get('.brand').click()
	}

	static search(term) {
		cy.get('#searchTerm').type(`${term} {enter}`)
	}

	static clickSignIn() {
		cy.get('#signin_button').click()
	}

	static displaySignInButton() {
		//cy.get('.alert-error').should('be.visible')
		cy.isVisible('#signin_button') //from support/commands.js
	}

	static clickSettings() {
		cy.contains('Settings').click()
	}

	static logout() {
		cy.contains('username').click()
		cy.get('#logout_link').click()
	}
}
