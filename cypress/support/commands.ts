declare namespace Cypress {
  interface Chainable {
    getProducts(options?: object): Chainable<Response<any>>;
  }
}

Cypress.Commands.add("getProducts", (options = {}) => {
  return cy.request({
    url: `/products/`,
    method: "GET",
    qs: options,
  });
});
