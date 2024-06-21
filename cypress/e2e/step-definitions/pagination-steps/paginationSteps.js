
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const PaginationPage = require('../../pages/paginationPage');

const paginationPage = new PaginationPage();

Given(/^user is on "([^"]*)"$/, (url) => {
    cy.visit(url, {failOnStatusCode: false});
  })

Then(/^user should see "([^"]*)" heading$/, (heading) => {
    paginationPage.getPaginationHeading().should('have.text',"Pagination");
})

Then(/^user should see "([^"]*)" sub heading$/, () => {
    paginationPage.getWorldCityPopulationsHeading().should('have.text','World City Populations 2022');
})

Then(/^user should see "([^"]*)" paragraph$/, () => {
    paginationPage.getCotentText().should('have.text','What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:');
})

Then(/^user should see the "([^"]*)" button is disabled$/, (label) => {
    paginationPage.getPaginationButtonByLabel(label).should('be.disabled');
});
  

Then(/^user should see the "([^"]*)" button is enabled$/, () => {
    paginationPage.getPaginationButtonByLabel(label).should('be.enabled');
})

When(/^user clicks on "([^"]*)" button$/, (label) => {
    paginationPage.clickPaginationButtonByLabel(label);
})

When(/^user clicks on "([^"]*)" button till it becomes disabled$/, (label) => {
    paginationPage.clickButtonUntilDisabled(label);
})


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
    const expectedInfo = dataTable.rawTable.flat();

    paginationPage.getInfoText().each(($el, index) => {
        cy.wrap($el).should('have.text', expectedInfo[index]);
    })

    paginationPage.getCityImage().should('be.visible');
    
});

