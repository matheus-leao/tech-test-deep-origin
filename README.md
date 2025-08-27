# tech-test-deep-origin

This repository was created to develop the technical test for the Lead QA Automation Engineer at Deep Origin.

Main objective shared by Mariana Romaniv:

**Task**:
Please write API tests for the Product API using TypeScript and Cypress.
API documentation: https://dummyjson.com/docs/products

**Submission**:
Kindly submit the completed task via a GitHub repository link.

---

**Development**:
Create a Cypress + Typescript project and create api tests following the VADER heuristic.

Libraries in use: 
- Cypress like motor of the framework, used to manage, orchestrate and generate reports from the tests.
- Mocha is used to setup typescript reference and integration with cypress.
- Chai to improve and optimize the assertions.
- Prettier to make the code more readable and "pretty".


---

How to use it?

1. Clone the repo
2. Run the command ```npm install``` to install the dependencies
3. Run the command ```npm run cy:open``` to open cypress to watch the tests

How to run on cypress cloud?
1. Clone the repo
2. Run the command ```npm install``` to install the dependencies
3. On the root of project create an folder ".vscode" and open the folder
4. Create a file .env with your cypress cloud token <code> cypress-cloud-token=yourTokenHere </code>
5. Run the command ```npm run cy:run-cloud``` to run your tests and generate a report at Cypress cloud.
