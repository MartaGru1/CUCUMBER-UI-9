const TGBasePage = require('./TGBasePage')

class TGHtmlElementsPage extends TGBasePage {
  /* Locators */
  getButtons() {
    return cy.get('#register_button, #signin_button')
  }

  getButtonMessage() {
    return cy.get('.is-block')
  }

  getButtonByText(label) {
    return this.getButtons().contains(label)
  }

  getFirstDropdown() {
    return cy.get('#company_dropdown1')
  }

  getSecondDropdown() {
    return cy.get('#company_dropdown2')
  }

  getTextInputOne() {
    return cy.get('#text_input1')
  }

  getTextInputTwo() {
    return cy.get('#text_input2')
  }

  getInputBoxes() {
    return cy.get('#text_input1, #text_input2')
  }

  getInputboxByIndex(index) {
    const realIndex = Number(index) - 1

    return this.getInputBoxes().eq(realIndex)
  }

  getCheckboxByLabel(label) {
    const checkboxes = {
      Apple: '#checkbox_1',
      Microsoft: '#checkbox_2',
      Tesla: '#checkbox_3',
    }

    if (!label) {
      throw new Error(`${label} not found`)
    }

    return cy.get(checkboxes[label])
  }

  /* Methods */

  clickButtonByText(label) {
    this.getButtonByText(label).click()
  }
}

module.exports = TGHtmlElementsPage