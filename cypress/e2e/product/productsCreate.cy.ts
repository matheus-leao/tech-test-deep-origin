import { faker } from "@faker-js/faker";
import { ProductDto } from "../../support/model/productModel";

describe("Product Creation", () => {
  it("When I create a product with all obligatory data, should return 201", () => {
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

  // https://github.com/matheus-leao/tech-test-deep-origin/issues/10
  it.skip("When I create a product with tags associated, should return 201", () => {
    const productModelWithEssentialFields: ProductDto = {
      title: "Test product Creation",
      description: faker.lorem.paragraph(),
      category: "fakeCategory",
      price: 8.99,
      tags: ["fake", "fakeCategory"],
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
