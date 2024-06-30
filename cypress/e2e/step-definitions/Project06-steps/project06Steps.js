const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
const Project06Page = require("../../pages/Project06Page")

const project06Page = new Project06Page();


Given(/^user is on "([^"]*)"$/, (url) => {
    cy.visit(url);
})

Then(/^user should see "([^"]*)" heading$/, (tableHeading) => {
    project06Page.getInventoryHeading().should('have.text',tableHeading);
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
  const headers = dataTable.rawTable.flat()
  project06Page.getTableHeaderRow().each(($el, index) => {
    cy.wrap($el).should('have.text', headers[index]);
  });

});

Then(/^the user should see the table with the rows below$/, (dataTable) => {
  const rows = dataTable.rawTable()

  rows.forEach((row, index) => {
    project06Page.getTableRows().each(($row, rowIndex) => {
      const expextedRow = rows[rowIndex]

      cy.wrap($row).find('td').each(($cell, cellIndex) => {
        cy.wrap($cell).should('have.text', expextedRow[cellIndex]);
      })
    })
  })
})

Then(/^user should see the "([^"]*)" button is enabled$/, (buttonName) => {
  switch (buttonName) {
    case 'ADD PRODUCT':
      project06Page.getAddButton().should('be.enabled')
      break;
    case 'X': 
      project06Page.getCloseButton().should('be.enabled')
      break;
    case 'SUBMIT':
      project06Page.getSubmitButton().should('be.enabled')
      break;
    default:
  }
});

Then(/^the user should see the "([^"]*)" text displayed$/, (totalText) => {
  project06Page.getTotal().should('have.text', totalText);
})




When(/^the user clicks on the "([^"]*)" button$/, () => {
  switch (buttonText) {
    case 'ADD PRODUCT':
      project06Page.clickAddButton();
      break;
    case 'X':
      project06Page.ckickCloseButton();
      break;
    case 'SUBMIT':
      project06Page.clickSubmitButton();
      break;
    default:
  }
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (headingTitle) => {
  project06Page.getModalTitle().should('have.text', headingTitle);
})
                               

Then(/^the user should see the "([^"]*)" label$/, (label) => {
  project06Page.getModalCardLables().contains(label);
})


Then(/^the user should see the "([^"]*)" input box is enabled$/, (input) => {
  project06Page.getModalCardInputs(input.toLowerCase()).should('be.enabled');
 
})



Then(/^the user should not see the "([^"]*)" modal$/, (productModal) => {
  project06Page.getModalCard().should('not.exist');
})



Then(/^the user enters the "([^"]*)" as "([^"]*)"$/, (label, input) => {
  project06Page.getModalCardInputs(label).type(input);

});


Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const newRow = dataTable.rawTable.flat();
  project06Page.getTableRows().last().find('td').each(($el, index) => {
    cy.wrap($el).should('have.text', newRow[index]);
  });
});






