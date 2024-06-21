class PaginationPage{

/* Locators */

    getPaginationHeading() {
        return cy.get('h1.is-size-3');
    }

    getWorldCityPopulationsHeading() {
        return cy.get('#sub_heading');
    }

    getContentText() {
        return cy.get('#content');
    }

    getPaginationButtonByLabel(idLocator) {
        return cy.get(`#${idLocator.toLowerCase()}`);
    }

/* Methods*/
    clickPaginationButtonByLabel(idLocator) {
        return cy.get(`#${idLocator.toLowerCase()}`).click();
    }

    clickButtonUntilDisabled(label) {
        this.clickPaginationButtonByLabel(label).then(($button) => {
            if($button.is(':disabled')) {
                this.clickPaginationButtonByLable(label);


                this.clickButtonUntilDisabled(label);
            }
        });
    }

    getCityImage() {
        return cy.get('#city_image');
    }

    getInfoText() {
        return cy.get('[class$="info"]');
    }
   


}

module.exports =  PaginationPage;