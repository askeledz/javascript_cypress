export default class BasePage {
	static pause(ms) {
		cy.wait(ms)
	}
	static logInfo(message) {
		cy.log(message)
	}

	static setMobileViewPort() {
		cy.viewport('iphone-x')
	}

	static setTabletViewPort() {
		cy.viewport('ipad-2')
	}

	static setDesktopViewPort() {
		cy.viewport('macbook-13')
	}

	static setLargeDesktopViewPort() {
		cy.viewport(1980, 1080)
	}
}
