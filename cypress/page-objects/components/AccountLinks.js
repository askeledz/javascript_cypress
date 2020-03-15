export default class AccountLinks {
    static clickSummary(){
        cy.get('#account_summary_tab').click()
    }
    static clickActivity() {
		cy.contains('account_activity_tab').click()
	}
}
