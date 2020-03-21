// run single spec:
// npx cypress run --spec=cypress/integration/regression/image.spec.js

const pages = ['http://example.com/']

const sizes = ['iphone-6', 'ipad-2', [1200, 800]]

describe('Visual regression testing', () => {
	sizes.forEach(size => {
		pages.forEach(page => {
			it(`Should match ${page} in resolution of ${size}.`, () => {
				let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
				cy.clock(currentTime) // to awoid some difference if page has time

				cy.setResolution(size)
				cy.visit(page)
				cy.matchImageSnapshot({
					failureThreshold: 10.0, // overide support/commands parameters
					failureThresholdType: 'percent', // overide support/commands parameters
				})
			})
		})
	})
})

describe('Single element snapshot', () => {
	it('should match single elemnt', () => {
		cy.visit('http://example.com/')
		cy.get('h1').matchImageSnapshot({
			failureThreshold: 100.0, // overide support/commands parameters
			failureThresholdType: 'pixel', // overide support/commands parameters
		})
	})
})
