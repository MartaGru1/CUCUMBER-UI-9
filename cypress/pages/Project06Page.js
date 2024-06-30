class Project06Page {

    /* Locators*/
    getInventoryHeading() {
        return cy.get('.is-size-3');
    }

    getTableHeaderRow() {
        return cy.get('#product_table thead th');
    }

    getTableRows() {
        return cy.get('#product_table tbody tr');
    }
    
    getAddButton() {
        return cy.get('#add_product_button');
    }

    getTotal() {
        return cy.get('#total_amount');
    }

    getModalCard() {
        return cy.get('.modal-card');
    }

    getModalTitle() {
        return cy.get('#modal-card-title');
    }

    getCloseButton() {
        return cy.get('.delete');
    }

    getModalCardLables() {
        return cy.get('.field > label');
    }

    getModalCardInputs(label) {
        return this.getModalCardLables().contains(label).next().find('input');
    }

    getSubmitButton() {
        return cy.get('#submit');
    }












    /* Methods*/

    clickAddButton() {
        this.getAddButton().click();
    }

    clickSubtimButton() {
        this.getSubmitButton().click();
    }

    clickCloseButton() {
        this.getCloseButton().click();
    }






}

module.exports = Project06Page