// import { baseAPIPortalFabricDEV } from '../../../cypress'

let urlAPI = Cypress.config('url.api.com')
let authAPI = Cypress.config('auth.api.com')

describe('API Testing - Report', () => {
	it('POST /endpoint', () => {
		cy.fixture('genome-solo-custom').then(body => {
			cy.request({
				method: 'POST',
				url: `${urlAPI}/endpoint`,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${authAPI}`,
				},
				body,
			}).then(response => {
				expect(response.status).to.eq(200)
				const target = response.body
				//set new reportID from response
				Cypress.config('reportID', target[0])
				cy.log(Cypress.config('reportID'))
			})
		})
	})

	it('GET /endpoint/{id}', () => {
		cy.request({
			method: 'GET',
			url: `${urlAPI}/endpoint/${Cypress.config('reportID')}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${authAPI}`,
			},
		}).then(response => {
			cy.log(JSON.stringify(response.body))
			expect(response.status).to.eq(200)
			assert.equal(response.status, 200)
			expect(response.body).to.not.be.null
		})
	})

	it('GET /endpoint/{id}', () => {
		cy.request({
			method: 'GET',
			url: `${urlAPI}/endpoint/${Cypress.config('reportID')}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${authAPI}`,
			},
		}).then(response => {
			cy.log(JSON.stringify(response.body))
			expect(response.status).to.eq(200)
			assert.equal(response.status, 200)
			expect(response.body).to.not.be.null
			expect(response.body.cr_status).to.have.property('status', 'WAITING')
		})
	})
})
