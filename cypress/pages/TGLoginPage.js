const TGBasePage = require('./TGBasePage')

class TGLoginPage extends TGBasePage {
  /* Locators */

  getUsername() {
    return cy.get('#username')
  }

  getPassword() {
    return cy.get('#password')
  }

  getLoginButton() {
    return cy.get('#login_btn')
  }

  getErrorMessage() {
    return cy.get('#error_message')
  }

  getSuccessMessage() {
    return cy.get('#success_lgn')
  }

  /* Methods */

  clickLoginButton() {
    this.getLoginButton().click()
  }

  /**
   * This method helps user to enter the credentials.
   *
   * @param {string} username - username field
   * @param {string} password - password field
   *
   * @example
   *
   * login('TechGlobal', 'Test1234')
   */
  login(username, password) {
    this.getUsername().type(username)
    this.getPassword().type(password)
  }
}

module.exports = TGLoginPage