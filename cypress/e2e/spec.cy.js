describe('template spec', () => {
  /**
   * Navigate to https://techglobal-training.com/frontend/project-2
   * Enter the username as “TechGlobal”
   * Enter the password as “Test1234”
   * Click on the “LOGIN” button
   * Click on the “LOGOUT” button
   * Validate that the login form is displayed
   */

  it('Test Case 03 - Validate the logout', () => {
    cy.visit('https://example.cypress.io')

    cy.get().type()
    cy.get().type()

    cy.get('').click()
    cy.get('').click()

    cy.get().should()
  })
})

/**
   * Scenario: User logs in and logs out successfully
  
   * Given the user is on the login page
   * When the user enters the username as "TechGlobal"
   * And the user enters the password as "Test1234"
   * And the user clicks on the "LOGIN" button
   * And the user clicks on the "LOGOUT" button
   * Then the login form should be displayed

 */
