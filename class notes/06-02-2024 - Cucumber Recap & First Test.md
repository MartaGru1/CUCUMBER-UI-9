
# Setting up Cypress with Cucumber Preprocessor

## Step-by-Step Guide

### Step 1: Create folder and initialize package.json
Create a folder and initialize `package.json` from the terminal.

### Step 2: Install Cypress
Run the command to install Cypress.

### Step 3: Open Cypress Runner
Open the Cypress Runner to initialize your folder/files.

### Step 4: Ensure Initialization
Make sure all necessary folders/files are initialized.

### Step 5: Install Cucumber Preprocessor
Find the `badeball` cucumber preprocessor and install it.

### Step 6: Navigate to Documentation
Go to the preprocessor documentation page and navigate to "Documentation", then click on "Quick Start".

### Step 7: Follow Example Setup
Follow the steps on Example Setup:
- Convert your `config.js` to `config.ts`.
- Copy the whole example `config.ts` code into your `config.ts`.
  
  *NOTE: Expect to see an error on Line: 2 and Line: 4.*

### Step 8: Resolve Line 2 Error
Install the package suggested for the error on Line: 2 to clear the error.

### Step 9: Check for TypeError
Run `npx cypress open` to see the TypeError.

### Step 10: Install ts-node
Install `ts-node` to clear the error from Step 9.

### Step 11: Verify Error Clearance
Run `npx cypress open` again to ensure there is no error.

### Step 12: Create tsconfig.json
Create a `tsconfig.json` file to address the error on Line: 4 in the root of your folder.

### Step 13: Check for Module Error
Navigate to "Documentations" in the preprocessor documentation and find the "FAQ" section. You will find the solution to fix the error on Line: 4:
- *I get Cannot find module '@badeball/cypress-cucumber-preprocessor/esbuild'.*

### Step 14: Update tsconfig.json
Copy the suggested code from this solution and paste it inside your `tsconfig.json`.

### Step 15: Resolve Line 4 Error
Expect to see the error in the `config.ts` file on Line: 4 cleared, but now you have an error on Line: 2 again, under the `createBundler`.

### Step 16: Implement Solution
Hover over the error, the solution is there. Implement that solution in `tsconfig.json`.

### Step 17: Configure VSCode Plugin
Ensure the "Cucumber (Gherkin) Full Support" VSCode plugin is installed, and configure the path. This will help you to see if you have any undefined steps in the feature file.

### Step 18: Configure Preprocessor
Configure the preprocessor for where to find your step definitions.

### Step 19: Update package.json
Go to `package.json`, under your dependencies, create a new object called `"cypress-cucumber-preprocessor": { }`.

### Step 20: Specify Step Definitions Path
Inside, create `stepDefinitions` and assign it to your path.

  Example:

  ```json
  "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/step-definitions/**/*.js"
  }
  ```





	What is BDD ?

		It's a type of testing framework extended from TDD. Purpose of BDD framework to create and explicitly outline the user behaviours during testing. With this approach, it closes the gap between technical and non-technical members in the team.

		Unlike TDD framework, in BDD we have one more layer its where we define the user behaviours (scenarios). These are written in Gherkin language, and aims to explain in details of user behavior step by step.


		Then user validates input box is visible
		And user types "TechGlobal"



	Then I validate the email input box is visible on the Login Page
	And I update the email input box with "TechGlobal" on the Login Page



	Given user navigates to "someUrl"
	And I update the email input box with "TechGlobal" on the Login Page
	And I update the password input box with "***" on the Login Page



	Three Components of Cucumber Framework

		1. Feature file

			Its a place where we write our Test Cases in Gherkin format and document them.

				Keywords
				- Feature 	=> Its a high level description of our tests.
				- Scenario 	=> Name of each test case
				- Steps 	  => Each step in the scenario where it defines the user bahviour

				- Given		=> Pre condition
				- When 		=> A specific user action
				- Then 		=> Outcome after the user action
				- And 		=> When user wants to group two or more When or Then keywords. 

		2. Step Definitions

			It's the code representation of each step we have in the feature file that is linked directly to step itself.


		3. Runner ( we will not need this on Cypress )

			For Cypress integration with Cucumber, we still maintain Cypress as main runner, not Cucumber. So that's why, we dont have any runner file in Cypress-Cucumber integration.
