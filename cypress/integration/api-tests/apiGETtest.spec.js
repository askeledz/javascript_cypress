import { baseAPIURL2 } from '../../../cypress'

describe('API Testing with Cypress', () => {
	it('GET /endpoint/{id}', () => {
		cy.request({
			method: 'GET',
			url: `${baseAPIURL2}/endpoint/356171`,
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Basic dHlBeFFCYldwSjkyeXZoNHQwMFdlY0d1TFJFSWk0V1Q6N1BzcUFkZE54RDFwZXZiSXZjWDd3em5sZmxwQVV1c24=',
			},
		}).then(response => {
			expect(response.body).to.have.property(
				'propertie',
				"some propertie"
			)
		})
	})
})