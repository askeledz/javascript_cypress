import { baseAPIURL2 } from '../../../cypress'

describe('API Testing with Cypress', () => {
	it('POST /create nesto', () => {
		cy.fixture('JSONexample').then(body => {
			cy.request({
				method: 'POST',
				url: `${baseAPIURL2}/endpoint`,
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Basic dHlBeFFCYldwSjkyeXZoNHQwMFdlY0d1TFJFSWk0V1Q6N1BzcUFkZE54RDFwZXZiSXZjWDd3em5sZmxwQVV1c24=',
				},
				body,
			}).then(response => {
				const target = response.body
				cy.log(target)
			})
		})
	})
})
