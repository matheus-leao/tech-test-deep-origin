# Technical Test for Deep Origin

This repository contains the solution for the Lead QA Automation Engineer technical test at Deep Origin. The main objective is to create API tests for the [Product API](https://dummyjson.com/docs/products) using TypeScript and Cypress.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://docs.npmjs.com/about-npm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matheus-leao/tech-test-deep-origin.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tech-test-deep-origin
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

---

##  Cypress Tests

### Running Tests Locally

To run the Cypress tests, use the following commands:

- **Open Cypress Test Runner:**
  ```bash
  npm run cy:open
  ```
- **Run tests in headless mode:**
  ```bash
  npm run cy:run
  ```

### Running Tests on Cypress Cloud

To run the tests and record the results on Cypress Cloud, you need to set up a `.env` file with your `CYPRESS_CLOUD_TOKEN`.

1. Create a `.env` file in the root of the project.
2. Add your Cypress Cloud token to the `.env` file:
   ```
   CYPRESS_CLOUD_TOKEN=your_token_here
   ```
3. Run the following command:
   ```bash
   pnpm cy:run-cloud
   ```

---

## 🧪 Test Strategy

The test strategy for this project is based on two main heuristics: **CRUD** and **VADER**.

<details>
<summary><strong>CRUD Heuristic</strong></summary>

- **Create (POST):** Tests focused on creating new data.
- **Read (GET):** Tests focused on retrieving data.
- **Update (PUT/PATCH):** Tests focused on updating existing data.
- **Delete (DELETE):** Tests focused on deleting existing data.

</details>

<details>
<summary><strong>VADER Heuristic</strong></summary>

- **Verbs:** Verify all HTTP verbs (GET, POST, PUT, PATCH, DELETE).
- **Authorization:** Verify token creation, expiration, and access control.
- **Data:** Verify that the API returns the correct data in the expected format.
- **Errors:** Verify the API's behavior in unexpected scenarios (e.g., 301, 400, 401, 404 errors).
- **Responsiveness:** Verify that the API meets non-functional requirements for response time.

</details>

---

## 📁 Project Structure

The project is organized as follows:

```
tech-test-deep-origin/
├── cypress/
│   ├── e2e/
│   │   ├── category/
│   │   │   └── categoryRead.spec.ts     # API tests for Read Categories
│   │   └── product/
│   │       ├── productDelete.spec.ts   # API tests for Delete Products
│   │       ├── productCreate.spec.ts   # API tests for Create Products
│   │       ├── productRead.spec.ts     # API tests for Read Products
│   │       └── productUpdate.spec.ts   # API tests for Update Products
│   ├── fixtures/                 # Test data and mock responses
│   └── support/                  # Custom commands and utilities
├── .github/
│   └── workflows/
│       └── cypress-cy.js.yml     # CI pipeline configuration
├── .env.example                  # Example of environment variables
├── .gitignore
├── .prettierrc                   # Prettier formatting rules
├── cypress.config.ts             # Cypress configuration
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
└── tsconfig.json                 # TypeScript configuration
```

- Test files are located under `cypress/e2e/`.
- Shared data and utilities are in `cypress/fixtures/` and `cypress/support/`.
- **Note:** The `dummyjson` tool does not allow methods other than GET for the category endpoint, so the focus of the tests is on the product endpoint as requested.

---

## 🐞 Issues Found

The `dummyjson` tool does not implement some expected validations and behaviors for an API. Based on this, I have created some [issues](https://github.com/matheus-leao/tech-test-deep-origin/issues) to document these findings.

---

## 🚀 CI/CD Pipeline

The CI pipeline was created using GitHub Actions. The pipeline configuration is written in YAML and follows best practices for managing secrets securely.

[![Cypress CI](https://github.com/matheus-leao/tech-test-deep-origin/actions/workflows/cypress-cy.js.yml/badge.svg)](https://github.com/matheus-leao/tech-test-deep-origin/actions/workflows/cypress-cy.js.yml)

---

## ☁️ Cypress Cloud Report

It is as important to run our tests as it is to publish the report in a way that can generate actions in the daily basis of the development team. That's why we can keep tracking the evolution of the tests and their historic run here on [Cypress Cloud Report](https://cloud.cypress.io/projects/2hfua5/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY).

---
