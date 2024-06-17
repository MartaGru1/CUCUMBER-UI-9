class PaginationPage{

    getPaginationHeading() {
        return cy.get('h1.is-size-3');
    }

    getWorldCityPopulationsHeading() {
        return cy.get('#sub_heading');
    }

    getPopulatedCitiesParagraph() {
        return cy.get('#content');
    }

    getPreviousButton() {
        return cy.contains('Previous');
    }

    getNextButton() {
        return cy.contains('Next');
    }

    getDisabledNextButton() {
        return cy.get('.disabled');
    }

    getDisabledPreviousButton() {
        return cy.get('.disabled');
    }

    getCityInfo() {
        return cy.get('.city-info');
    }

    getCountryInfo() {
        return cy.get('.country-info');
    }   

    getPopulationInfo() {
        return cy.get('.population-info');
    }

    getCityImage() {
        return cy.get('.city-image');
    }


}

module.exports =  PaginationPage;