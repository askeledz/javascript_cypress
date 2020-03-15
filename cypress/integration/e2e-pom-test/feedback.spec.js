import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Testing using Fixtures', () => {
	before(function() {
		FeedbackPage.load()
	})
	it('should submit feedback form', () => {
		FeedbackPage.submitFeedback()
	})
})
