
  describe("Get All Product detailed Category Tests", () => {
    it("List all detailed product category", () => {
      cy.fixture("requests/product/read/whenIListAllDetailedProductCategory").then(
        (listOfDetailedCategories) => {
          cy.request({
            url: "/products/categories",
            method: "GET",
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(listOfDetailedCategories).to.deep.equal(response.body);
          });
        },
      );
    });

    // https://github.com/matheus-leao/tech-test-deep-origin/issues/8
    it.skip("List all product category", () => {
      cy.request({
        url: "/products/categories",
        method: "GET",
        qs: {
          limit: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.eq(1);
      });
    });
  });