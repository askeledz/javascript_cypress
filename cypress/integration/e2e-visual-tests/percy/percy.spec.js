describe('Visual Regression Testing with Percy and Cypress', () => {
	it('should take percy snapshot', () => {
		cy.visit('https://example.com')
		cy.wait(1000)
		cy.percySnapshot()
	})
})
