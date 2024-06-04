Feature: Framework Test

Scenario: Google Search Bar
    Given user navigates to "https://www.google.com"
    When user search for "Tesla"
    Then user should see "Tesla" in URL
    And user should see "Tesla" in the title
