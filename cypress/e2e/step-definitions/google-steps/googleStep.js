const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When(/^user search for "([^"]*)"$/, (link) => {
  cy.get('[name="q"]').type(`${link}{enter}`)
})

Then(/^user should see "([^"]*)" in the URL$/, (url) => {
  cy.url().should('contain', url)
})

Then(/^user should see "([^"]*)" in the title$/, (title) => {
  cy.title().should('contain', title)
})
