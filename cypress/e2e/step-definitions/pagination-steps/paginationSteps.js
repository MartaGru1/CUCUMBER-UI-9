/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const PaginationPage = require('../../pages/paginationPage');

const paginationPage = new PaginationPage();

Given(/^user is on "([^"]*)"$/, (url) => {
    cy.visit(url);
  })

Then(/^user should see "([^"]*)" heading$/, () => {
    paginationPage.getPaginationHeading().should('be.visible').and('have.text',"Pagination");
})

Then(/^user should see "([^"]*)" sub heading$/, () => {
    paginationPage.getWorldCityPopulationsHeading().should('be.visible').and('have.text','World City Populations 2022');
})

Then(/^user should see "([^"]*)" paragraph$/, () => {
    paginationPage.getPopulatedCitiesParagraph().should('be.visble')
    .and('have.text','What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:');
})

Then('the user should see the “Previous” button is disabled', () => {
    PaginationPage.getPreviousButton().should('have.class', 'disabled');
});
  
Then('the user should see the “Next” button is enabled', () => {
    PaginationPage.getNextButton().should('not.have.class', 'disabled');
});
  
When('the user clicks on the “Next” button', () => {
    PaginationPage.getNextButton().click();
});
  
Then('the user should see the “Previous” button is enabled', () => {
    PaginationPage.getPreviousButton().should('not.have.class', 'disabled');
});

When('the user clicks on the “Previous” button', () => {
    PaginationPage.getPreviousButton().click();
});

Then('the user should see the “Next” button is disabled', () => {
   PaginationPage.getNextButton().should('have.class', 'disabled');
});

Then ('user should see the city information', (city,dataTable) => {
    const cityInfo = dataTable.hashes()[0];
    paginationPage.getCityInfo().should('have.text', cityInfo.city);
    paginationPage.getCountryInfo().should('have.text', cityInfo.country);
    paginationPage.getPopulationInfo().should('have.text', cityInfo.population);
    paginationPage.getCityImage().should('have.attr', 'src', cityInfo.image);

});

