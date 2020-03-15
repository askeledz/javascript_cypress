const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const percyHealthCheck = require('@percy/cypress/task')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
	addMatchImageSnapshotPlugin(on, config)
	on('task', percyHealthCheck)
	on('file:preprocessor', cucumber())
}
