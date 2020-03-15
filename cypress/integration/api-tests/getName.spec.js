import { baseAPIURL } from '../../../cypress'

describe('API Testing with Cypress', () => {
	beforeEach(() => {
		cy.request('GET', `${baseAPIURL}/25`).as('pikachu')
	})

	it('Validate the header', () => {
		cy.get('@pikachu')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})

	it('Validate the status code', () => {
		cy.get('@pikachu')
			.its('status')
			.should('equal', 200)
	})

	it("Validate the pokemon's name", () => {
		cy.get('@pikachu')
			.its('body')
			.should('include', { name: 'pikachu' })
	})



	
})
