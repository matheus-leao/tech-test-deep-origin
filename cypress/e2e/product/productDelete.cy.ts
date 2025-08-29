describe("Delete products", () => {
    it("When I make a get request, should return 30 products", () => {
        const productId = 2;
        cy.request({
        url: `/products/${productId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        console.log(response.body);
        expect(response.body).to.deep.include({isDeleted: true})
        const deletedOnTime = new Date(response.body.deletedOn).getTime();
        expect(deletedOnTime).to.be.closeTo(new Date().getTime(), 1000);
      });
    });
});