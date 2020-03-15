import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
	LoginPage.visit()
})

When('I fill Username with {string}', username => {
	LoginPage.fillUsername(username)
})

When('I fill Password with {string}', password => {
	LoginPage.fillPassword(password)
})

When('I click Submit login', () => {
	LoginPage.submit()
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see error message', () => {
	LoginPage.shouldShowErrorMessage()
})
