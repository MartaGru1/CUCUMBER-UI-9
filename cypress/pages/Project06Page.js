class Project06Page {

    /* Locators*/
    getInventoryHeading() {
        return cy.get('h1.is-size-3');
    }

    getTableHeaders() {
        return cy.get('table thead tr th');
    }

    getTableRows() {
        return cy.get('table tbody tr');
    }
    
    getAddButton() {
        return cy.get('#add_product_button');
    }

    getTotal() {
        return cy.get('#total_amount');
    }


    /* Methods*/

    clickAddButton() {
        return cy.get('#add_product_button').click();
    }

}

module.exports = Project06Page