# Technical Test to Deep Origin 

This repository was created to develop the technical test for the Lead QA Automation Engineer position at Deep Origin.

Main objective:

**Task**:
Please write API tests for the Product API using TypeScript and Cypress.
API documentation: https://dummyjson.com/docs/products

**Submission**:
Kindly submit the completed task via a GitHub repository link.

---

**Development**:
Create a Cypress + Typescript project and create api tests following the VADER heuristic.

Libraries in use:

- Cypress
- Mocha 
- Chai
- Faker
- Prettier

---

**Strategy**:
During this project, I used 2 heuristics to guide the test strategy defined:

1. CRUD
   1. Create -> Tests with objective to create new data (POST)
   2. Read -> Tests with objective to read data (GET)
   3. Update -> Tests with objective to update existent data (PUT/PATCH)
   4. Delete -> Tests with objective to delete existent data (DELETE)

2. VADER
   1. Verbs -> Verify all verbs (GET, POST, PUT, PATCH, DELETE)
   2. Authorization -> Verify if the token was created with success, if they are been expired and you only have access to what is defined
   3. Data -> Verify if the api was returning the right data on the correct format
   4. Errors -> Verify the behavior of the api when you do not expected actions, verify error 301, 400, 401, 404. 
   5. Responsiveness -> Verify if the api is respecting the non functional requirement of response time.

Based on this concepts the project was been created. 

---
Project structure
The project is organized as follows:

```
tech-test-deep-origin/
├── cypress/
│   ├── e2e/
│   │   └── category/
│   │       └── categoryRead.spec.ts     # API tests for Read Categories 
│   │   └── product/
│   │       └── productDelete.spec.ts   # API tests for Delete Products 
│   │       └── productCreate.spec.ts   # API tests for Create Products 
│   │       └── productRead.spec.ts     # API tests for Read Products 
│   │       └── productUpdate.spec.ts   # API tests for Update Products 
│   ├── fixtures/                 # Test data and mock responses
│   └── support/                  # Custom commands and utilities
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── cypress.config.ts             # Cypress configuration
├── .prettierrc                   # Prettier formatting rules
└── README.md                     # Project documentation
```

- Test files are located under `cypress/e2e/`.
- Shared data and utilities are in `cypress/fixtures/` and `cypress/support/`.
- Is important to say that the dummyjson tool, don't allow other methods for the category endpoint, that's why we keep the focus on the product how asked.

---
Issues found

Is important to say that the dummyjson tool, don't implement expected validations and behaviors that we expect for the api. 
Based on that I create some [issues](https://github.com/matheus-leao/tech-test-deep-origin/issues).

---
Pipeline strategy

The CI pipeline was created using github Actions. We use Yaml and follow the best practices about managing secrets with security. 

The pipeline was visible here: 

[![Cypress  CI](https://github.com/matheus-leao/tech-test-deep-origin/actions/workflows/cypress-cy.js.yml/badge.svg)](https://github.com/matheus-leao/tech-test-deep-origin/actions/workflows/cypress-cy.js.yml)
---

Cypress cloud result

As important how to run our tests is publish the report in a way that can generate actions in the daily basis of the development team. That`s why we can keep tracking the evolution of the tests and his historic run here on [Cypress Cloud Report](https://cloud.cypress.io/projects/2hfua5/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY)

---