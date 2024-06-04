const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()

Then(/^user should see the "([^"]*)" page heading$/, (args1) => {
  console.log(args1)
  return true
})

When(/^user clicks on the "([^"]*)" button$/, (label) => {
  tgHtmlElementsPage.clickButtonByText(label)
})

Then(/^the text under it should be "([^"]*)"$/, (message) => {
  tgHtmlElementsPage.getButtonMessage().should('have.text', message)
})

When(/^user selects "([^"]*)" from the first dropdown menu$/, (option) => {
  tgHtmlElementsPage.getFirstDropdown().select(option)
})

When(/^user selects "([^"]*)" from the second dropdown menu$/, (option) => {
  tgHtmlElementsPage.getSecondDropdown().select(option)
})

Then(/^"([^"]*)" should be the selected option in the first dropdown$/, (option) => {
  tgHtmlElementsPage.getFirstDropdown().should('have.value', option)
})

Then(/^"([^"]*)" should be the selected option in the second dropdown$/, (option) => {
  tgHtmlElementsPage.getSecondDropdown().should('have.value', option)
})

When(/^user enters "([^"]*)" to input field "([^"]*)"$/, (input, index) => {
  tgHtmlElementsPage.getInputboxByIndex(index).type(input)
})

Then(/^the text input "([^"]*)" should contain "([^"]*)"$/, (index, expectedValue) => {
  tgHtmlElementsPage.getInputboxByIndex(index).should('have.value', expectedValue)
})

When(/^user selects the "([^"]*)" checkbox$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).check()
})

Then(/^user deselects the "([^"]*)" checkbox$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).uncheck()
})

Then(/^the "([^"]*)" checkbox should not be checked$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).should('not.be.checked')
})

When(/^user selects the "([^"]*)" and "([^"]*)" checkboxes$/, (label1, label2) => {
  tgHtmlElementsPage.getCheckboxByLabel(label1).check()
  tgHtmlElementsPage.getCheckboxByLabel(label2).check()
})

Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, (label1, label2) => {
  tgHtmlElementsPage.getCheckboxByLabel(label1).should('be.checked')
  tgHtmlElementsPage.getCheckboxByLabel(label2).should('be.checked')
})

Then(/^the "([^"]*)" checkbox remains unchecked$/, (label) => {
  tgHtmlElementsPage.getCheckboxByLabel(label).should('not.be.checked')
})
