class Project06ProductModalPage {

    getModalHeading() {
        return cy.get('.modal-card-title');
    }

    getXButton() {
        return cy.get('.delete');
    }
        
    getQuantityLabel() {
        return cy.get('label[for = "product_quantity"]');
    }

    getQuantityInput() {
        return cy.get('#quantity');
    }

    getProductLable() {
        return cy.get('label[for = "product_name"]');
    }

    getProductInput() {
        return cy.get('#product');
    }

    getPriceLabel() {
        return cy.get('label[for = "product_price"]');
    }

    getPriceInput() {
        return cy.get('#price');
    }

    getSubmitButton() {
        return cy.get('#submit');
    }

    /* Methods*/

    clickXButton() {
        return cy.get('.delete').click();
    }


}

module.exports = Project06ProductModalPage;