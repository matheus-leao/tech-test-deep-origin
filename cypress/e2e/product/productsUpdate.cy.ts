import { faker } from "@faker-js/faker";
import { ProductDto } from "../../support/model/productModel";

describe("Product Update", () => {
  it("When I update the title of a product, should return 200 - PUT", () => {
    const newTitle = faker.lorem.words(2)
    const productId = 2;
      cy.request({
        url: `/products/${productId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: {title: newTitle},
      }).then((response) => {
        expect(response.status).to.eq(200);
        const updatedProduct: ProductDto = response.body;
        expect(updatedProduct.title).to.be.equal(newTitle);
      });
  });

  it("When I update the title of a product, should return 200 - PATCH", () => {
    const newTitle = faker.lorem.words(2)
    const productId = 2;
      cy.request({
        url: `/products/${productId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: {title: newTitle},
      }).then((response) => {
        expect(response.status).to.eq(200);
        const updatedProduct: ProductDto = response.body;
        expect(updatedProduct.title).to.be.equal(newTitle);
      });
  });

  it("When I update the title and description of a product, should return 200 - PUT", () => {
    const newTitle = faker.lorem.words(2)
    const newDescription = faker.lorem.paragraph(2)
    const productId = 2;
      cy.request({
        url: `/products/${productId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: {title: newTitle, description: newDescription},
      }).then((response) => {
        expect(response.status).to.eq(200);
        const updatedProduct: ProductDto = response.body;
        expect(updatedProduct.title).to.be.equal(newTitle);
        expect(updatedProduct.description).to.be.equal(newDescription);
      });
  });

   it("When I update the title and description of a product, should return 200 - PUT", () => {
    const newTitle = faker.lorem.words(2)
    const newDescription = faker.lorem.paragraph(2)
    const productId = 2;
      cy.request({
        url: `/products/${productId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: {title: newTitle, description: newDescription},
      }).then((response) => {
        expect(response.status).to.eq(200);
        const updatedProduct: ProductDto = response.body;
        expect(updatedProduct.title).to.be.equal(newTitle);
        expect(updatedProduct.description).to.be.equal(newDescription);
      });
  });

});
