class TGBasePage {
  /* Locators */
  getLogo() {
    return cy.get('#logo')
  }

  getNavigationDropdown() {
    return cy.get('#dropdown-container')
  }

  getHeading() {
    return cy.get('#main_heading')
  }

  /* Methods */
  clickDropdownOption(option) {
    this.getNavigationDropdown().find('a').contains(option).realClick()
  }
}

module.exports = TGBasePage
