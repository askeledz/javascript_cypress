import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
	static login(username, password) {
		cy.zeroLogin(username, password)
	}
	static clickForgotPasswordLink() {
		cy.contains('Forgot your password ?').click()
	}
	static displayErorMessage() {
		//cy.get('.alert-error').should('be.visible')
		cy.isVisible('.alert-error') //from support/commands.js
    }

}
