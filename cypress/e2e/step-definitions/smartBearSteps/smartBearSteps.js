import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SmartBearLoginPage from '../../../pages/SmartBearLoginPage'
import SmartBearOrderPage from '../../../pages/SmartBearOrderPage'

const smartBearLoginPage = new SmartBearLoginPage()
const smartBearOrderPage = new SmartBearOrderPage()

Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (user) => {
  smartBearLoginPage.getUserField().type(user)
})

When(/^user enters password as "([^"]*)"$/, (pass) => {
  smartBearLoginPage.getPasswordField().type(pass)
})

When(/^user clicks on "([^"]*)" button$/, (button) => {
  smartBearLoginPage.getButton(button).click()
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartBearLoginPage.getFailiureMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.url().should('contain', url)
})

Then(/^all rows should be checked$/, () => {
  smartBearOrderPage.getCheckBoxes().each(($el) => {
    cy.wrap($el).should('have.attr', 'checked', 'checked')
  })
})

Then(/^all rows should be unchecked$/, () => {
  smartBearOrderPage.getCheckBoxes().each(($el) => {
    cy.wrap($el).should('not.have.attr', 'checked')
  })
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  smartBearOrderPage.getCheckBoxes().should('not.exist')
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  smartBearOrderPage.getDeletedMessage().should('contain', message)
})

When(/^user clicks on "([^"]*)" menu item$/, (menuItem) => {
  smartBearOrderPage.getMenuItem(menuItem).click()
})

Then(/^validate below menu items are displayed$/, (dataTable) => {
  if (!dataTable.rawTable) {
    throw new Error('Data table is not provided or is invalid')
  }

  const items = dataTable.rawTable.flat()

  items.forEach((elem) => {
    smartBearOrderPage.getMenuItem(elem).should('be.visible')
  })
})

Then(/^user enters all product information$/, (dataTable) => {
  if (!dataTable.rawTable) {
    throw new Error('Data table is not provided or is invalid')
  }
  const info = dataTable.rawTable.flat()

  smartBearOrderPage.getProductFields().each(($el, index) => {
    let attr = $el.prop('nodeName').toLowerCase()
    if (attr === 'select') cy.wrap($el).select(info[index])
    else cy.wrap($el).clear().type(info[index])
  })
})

Then(/^user enters all address information$/, (dataTable) => {
  if (!dataTable.rawTable) {
    throw new Error('Data table is not provided or is invalid')
  }
  const info = dataTable.rawTable.flat()

  smartBearOrderPage.getAddressFields().each(($el, index) => {
    cy.wrap($el).clear().type(info[index])
  })
})

Then(/^user enters all payment information$/, (dataTable) => {
  if (!dataTable.rawTable) {
    throw new Error('Data table is not provided or is invalid')
  }
  const info = dataTable.rawTable.flat()

  smartBearOrderPage.getPaymentFields().each(($el, index) => {
    let attr = $el.prop('nodeName').toLowerCase()
    if (attr === 'label') cy.wrap($el).click()
    else cy.wrap($el).clear().type(info[index])
  })
})

Then(/^validate all information entered displayed correct with the order$/, (dataTable) => {
  dataTable.rawTable.flat().forEach((_, index, arr) => {
    smartBearOrderPage.getNewestOrder().should('contain', arr[index])
  })
})