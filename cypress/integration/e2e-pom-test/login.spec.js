import { url, login_username, login_password } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login Failed Test', () => {
	before(function() {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('should try to login with invalid creds', () => {
		LoginPage.login('invalidu sername', 'invalid password')
	})
	it('should display error message', () => {
		LoginPage.displayErorMessage
	})
})

describe('Login Success Test', () => {
	before(function() {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('should login to application', () => {
		LoginPage.login(login_username, login_password)
	})
	it('should logout from application', () => {
		Navbar.logout()
		Navbar.displaySignInButton()
	})
})
