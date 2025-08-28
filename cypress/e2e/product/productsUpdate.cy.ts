import { faker } from "@faker-js/faker";
import { ProductDto } from "../../support/model/productModel";

describe("Product Update", () => {
  it("When I update the title of a product, should return 201", () => {
    const productModelWithEssentialFields: ProductDto = {
      title: "Test product Creation",
      description: faker.lorem.paragraph(),
      category: "fakeCategory",
      price: 8.99,
      brand: "Fake Brand",
    };
    cy.request({
      url: "/products/add",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: productModelWithEssentialFields,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.deep.include(productModelWithEssentialFields);
    });
  });
});
