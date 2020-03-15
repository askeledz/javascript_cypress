import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import '@percy/cypress'

addMatchImageSnapshotCommand({
	failureTreshold: 0.0,
	failureTresholdType: 'percent',
	customDiffConfig: { treshold: 0.0 },
	capture: 'viewport',
})

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
	cy.get(selector).should('not.exist')
})

Cypress.Commands.add('zeroLogin', (username, password) => {
	cy.get('#login_form').should('be.visible')
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').click()
	cy.contains('Sign in').click()
})

Cypress.Commands.add('setResolution', size => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

Cypress.Commands.add('fabricLogin', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()
	cy.get('#textfield-Email').type(username)
	cy.get('#textfield-Password').type(password)
	cy.get('.login-form__button').click()
})

Cypress.Commands.add('fabricLogout', () => {
	cy.get('.user-actions-menu').click()
	cy.get('a')
		.contains('Sign Out')
		.click()
})

Cypress.Commands.add('pilotLogin', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()
	cy.get('#username').type(username)
	cy.get('#password').type(password)
	cy.get('#submit-btn').click()
})
