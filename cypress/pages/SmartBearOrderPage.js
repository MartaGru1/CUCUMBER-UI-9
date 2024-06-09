const SmartBearLoginPage = require('./SmartBearLoginPage')

class SmartBearOrderPage extends SmartBearLoginPage {
  /* Locators */

  getCheckBoxes() {
    return cy.get('input[type="checkbox"]')
  }

  getDeletedMessage() {
    return cy.get('#ctl00_MainContent_orderMessage')
  }

  getMenuItem(menuItem) {
    switch (menuItem) {
      case 'View all orders':
        return cy.get('#ctl00_menu a').eq(0)
      case 'View all products':
        return cy.get('#ctl00_menu a').eq(1)
      case 'Order':
        return cy.get('#ctl00_menu a').eq(2)
      default:
        throw new Error('Invalid menu item provided')
    }
  }

  getProductFields() {
    return cy.get('#ctl00_MainContent_fmwOrder_ddlProduct, #ctl00_MainContent_fmwOrder_txtQuantity')
  }

  getAddressFields() {
    return cy.get(
      '#ctl00_MainContent_fmwOrder_txtName, #ctl00_MainContent_fmwOrder_TextBox2, #ctl00_MainContent_fmwOrder_TextBox3, #ctl00_MainContent_fmwOrder_TextBox4, #ctl00_MainContent_fmwOrder_TextBox5',
    )
  }

  getPaymentFields() {
    return cy.get(
      '[for="ctl00_MainContent_fmwOrder_cardList_0"], #ctl00_MainContent_fmwOrder_TextBox6, #ctl00_MainContent_fmwOrder_TextBox1',
    )
  }

  getNewestOrder() {
    return cy.get('tbody tr').eq(2)
  }

  /* Methods */
}

module.exports = SmartBearOrderPage