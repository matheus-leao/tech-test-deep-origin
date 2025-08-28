describe("Product Creation", () => {
  it("When I send all obligatory data I create a new product with success", () => {

    cy.request({
      url: "/products/add",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
    });
  });
});
