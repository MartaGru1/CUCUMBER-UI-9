class SmartBearLoginPage {
    /* Locators */
  
    getUserField() {
      return cy.get('#ctl00_MainContent_username')
    }
  
    getPasswordField() {
      return cy.get('#ctl00_MainContent_password')
    }
  
    getButton(button) {
      switch (button) {
        case 'Login':
          return cy.get('#ctl00_MainContent_login_button')
        case 'Check All':
          return cy.get('#ctl00_MainContent_btnCheckAll')
        case 'Uncheck All':
          return cy.get('#ctl00_MainContent_btnUncheckAll')
        case 'Delete Selected':
          return cy.get('#ctl00_MainContent_btnDelete')
        case 'Process':
          return cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
        default:
          throw new Error('Invalid button provided')
      }
    }
  
    getFailiureMessage() {
      return cy.get('#ctl00_MainContent_status')
    }
  
    /* Methods */
  }
  
  module.exports = SmartBearLoginPage