# Steps to Create Cucumber Framework

## Step-by-Step Guide

### Step 1: Create folder and initialize package.json
Create a folder, initialize `package.json` from the terminal.

### Step 2: Install Cypress
Run the command to install Cypress.

### Step 3: Open Cypress Runner
Open the Cypress Runner to initialize your folder/files.

### Step 4: Ensure Initialization
Make sure all necessary folders/files are initialized.

### Step 5: Install Cucumber Preprocessor
Find the `badeball` cucumber preprocessor and install it.

### Step 6: Navigate to Documentation
Go to the preprocessor documentation page and navigate to "Documentation", then click on "Examples".
- On examples, find the one with CJS built with "Esbuild".

### Step 7: Copy Configuration
Copy the `config.js` file from the repository and paste it inside your `config.js`.

### Step 8: Resolve Dependency Error
Expect to get an error on `config.js` on line 2 when you run `npx cypress open`. Install the missing dependency.

### Step 9: Install VSCode Plugin
Make sure the "Cucumber (Gherkin) Full Support" VSCode plugin is installed and configure the path.

### Step 10: Configure Preprocessor
Go to `package.json`, under your dependencies, create a new object called `"cypress-cucumber-preprocessor": { }`.

### Step 11: Specify Step Definitions Path
Inside, create `stepDefinitions` and assign it to your path.

  Example:

  ```json
  "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/step-definitions/**/*.js"
  }