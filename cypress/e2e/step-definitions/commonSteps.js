const { Then, Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user clicks on the "([^"]*)" card$/, (cardName) => {
  cy.contains(cardName).click()
})

Then(/^the URL should contain "([^"]*)"$/, (url) => {
  cy.url().should('contain', url)
})

Then(/^user should see the "([^"]*)" page heading$/, (heading) => {
  tgHtmlElementsPage.getHeading().should('have.text', heading)
})