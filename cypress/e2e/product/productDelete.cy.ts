import { ProductResponseBodyDto } from "../../support/model/productModel";

describe("Delete products", () => {
    it("When I try to delete an existent product, should return 200", () => {
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

    it("When I try to deleta a non-existent product, should return 404", () => {
        cy.getProducts().then((getProductsResponse)=>{
          const productResponseDto: ProductResponseBodyDto  = getProductsResponse.body;
          const nonExistentProductId = productResponseDto.total + 1;
          cy.request({
          url: `/products/${nonExistentProductId}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.deep.include({message: `Product with id '${nonExistentProductId}' not found`})
        });
        })
    });
});