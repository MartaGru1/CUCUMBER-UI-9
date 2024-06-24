const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
const Project06Page = require("../../pages/Project06Page")
const Project06ProductModalPage = require("../../pages/Project06ProductModalPage")

const project06Page = new Project06Page();
const project06ProductModalPage = new Project06ProductModalPage();


Given(/^user is on "([^"]*)"$/, (url) => {
    cy.visit(url);
})

Then(/^user should see "([^"]*)" heading$/, () => {
    project06Page.getInventoryHeading().should('have.text',"Inventory");
})

Then(/^the user should see the table with the headers$/, (dataTable) => {
  const headers = dataTable.rawTable.flat();
  project06Page.getTableHeaders().each(($el, index) => {
    cy.wrap($el).should('have.text', headers[index]);
  });

});

Then(/^the user should see the table with the rows$/, (dataTable) => {
  const rows = dataTable.hashes();
  rows.forEach((row, index) => {
    project06Page.getTableRows().eq(index).find('td').each(($el, i) => {
      cy.wrap($el).should('have.text', row[Object.keys(row)[i]]);
    });
  });

});

Then(/^user should see the "([^"]*)" button is enabled$/, () => {
  project06Page.getAddButton().should('have.text', 'ADD PRODUCT').and('be.enabled');
})

Then(/^the user should see the "([^"]*)" text displayed$/, () => {
  project06Page.getTotal().should('have.text', 'Total = $2,300');
})


When(/^the user clicks on the "([^"]*)" button$/, () => {
  project06Page.clickAddButton();
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, () => {
  project06Page.getModalHeading().should('have.text', 'Add Product');
})
                               
Then(/^the user should see the "([^"]*)" button is enabled$/, () => {
  project06Page.getXButton().should('be.enabled');
})

Then(/^the user should see the "([^"]*)" label$/, (label) => {
 project06ProductModalPage.getQuantityLabel().should('have.text', 'Please select the quantity');
})

Then(/^the user should see the "([^"]*)" input box is enabled$/, () => {
  project06ProductModalPage.getQuantityInput().should('be.enabled');
})

Then(/^the user should see the "([^"]*)" label$/, () => {
  project06ProductModalPage.getProductLable().should('have.text', 'Please enter the product name');
})

Then(/^the user should see the "([^"]*)" input box is enabled$/, () => {
  project06ProductModalPage.getProductInput().should('be.enabled');
})

Then(/^the user should see the "([^"]*)" label$/, () => {
  project06ProductModalPage.getPriceLabel().should('have.text', 'Please enter the price of the product');
})

Then(/^the user should see the "([^"]*)" input box is enabled$/,() => {
  project06ProductModalPage.getPriceInput().should('be.enabled');
});

Then(/^the user should see the "([^"]*)" button is enabled$/, () => {
  project06ProductModalPage.getSubmitButton().should('be.enabled');
})


When(/^the user clicks on the "([^"]*)" button$/, () => {
  project06ProductModalPage.clickXButton();
})

Then(/^the user should not see the "([^"]*)" modal$/, () => {
  project06ProductModalPage.getModalHeading().should('not.exist');
})


When(/^the user clicks on the "([^"]*)" button$/, () => {
  project06Page.clickAddButton();
});

When(/^the user enters the quantity as "([^"]*)"$/, (quantity) => {
  project06ProductModalPage.getQuantityInput().type(quantity);
});

When(/^the user enters the product as "([^"]*)"$/, (product) => {
  project06ProductModalPage.getProductInput().type(product);
});

When(/^the user enters the price as "([^"]*)"$/, (price) => {
  project06ProductModalPage.getPriceInput().type(price);
});

When(/^the user clicks on the "([^"]*)" button$/, () => {
  project06ProductModalPage.getSubmitButton().click();
});

Then(/^the user should see the table with the new row$/, (dataTable) => {
  const newRow = dataTable.hashes()[0];
  project06Page.getTableRows().last().within(() => {
    cy.get('td').eq(0).should('have.text', newRow.Quantity);
    cy.get('td').eq(1).should('have.text', newRow.Product);
    cy.get('td').eq(2).should('have.text', newRow['Proce $']);
    cy.get('td').eq(3).should('have.text', newRow['Total $']);
  });
});

Then(/^the user should see the "([^"]*)" text displayed$/, () => {
  project06Page.getTotal().should('have.text', 'Total = $2,500');
});





