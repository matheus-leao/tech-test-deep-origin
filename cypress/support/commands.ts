declare namespace Cypress {
  interface Chainable {
    getProducts(options?: object): Chainable<Response<any>>;
    getProduct(productId: number, options?: object): Chainable<Response<any>>;
  }
}

Cypress.Commands.add("getProducts", (options = {}) => {
  return cy.request({
    url: `/products/`,
    method: "GET",
    qs: options,
  });
});

//alterar outros get product pra usar essa funcao #todo
Cypress.Commands.add("getProduct", (productId, options = {}) => {
  return cy.request({
    url: `/products/${productId}/`,
    method: "GET",
    qs: options,
  });
});
