import { ProductResponseBody as ProductResponseBody } from '../support/model/productModel';

describe('Product Tests', () => {
    describe('Get products', ()=>{
        it('When I make a get request, should return 30 products', () => {
          cy.request({
            url: '/products',
            method: 'GET'
          }).then((response) => {
            expect(response.status).to.eq(200);
            const productResponseBody = response.body as ProductResponseBody;
            expect(productResponseBody.products.length).to.eq(30)
          })
        })
        it('When I make a get request to id=1, should return 1 unique product', ()=>{
          cy.fixture('requests/get/whenIMakeGetRequestToId1.json').then((expectedGetResponse)=>{
            cy.request({
              url: `/products/${expectedGetResponse.id}`,
              method: 'GET'
            }).then((response) => {
              expect(response.status).to.eq(200);  
              expect(response.body).to.deep.equal(expectedGetResponse)
            })
          })
        })
        it('When I make a get request with 1 limit, should return 1 products', () => {
          const limitExpected = 1;
          cy.request({
            url: '/products',
            method: 'GET',
            qs: {
              limit: limitExpected
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            const productResponseBody = response.body as ProductResponseBody;
            expect(productResponseBody.products.length).to.eq(limitExpected)
          })
        })
        it('When I make a get request with limit=1 and skip=1, should not the same product product (id=2)', () => {
          const limitExpected = 1;
          const skipExpected = 0
          cy.request({
            url: '/products',
            method: 'GET',
            qs: {
              limit: limitExpected,
              skip: skipExpected
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            const productResponseBody = response.body as ProductResponseBody;
            expect(productResponseBody.products.length).to.eq(limitExpected);
            const firstProductId = productResponseBody.products[0].id;
            cy.request({
              url: '/products',
              method: 'GET',
              qs: {
                limit: limitExpected,
                skip: skipExpected + 1
              }
            }).then((responseForSecondSkip) => {
              const secondProduct = (responseForSecondSkip.body as ProductResponseBody).products[0];
              // The product after skipping one should not be the same as the first
              expect(firstProductId).to.not.eq(secondProduct.id)
            })
          })
        })

    })

    describe('Get Category List Tests', ()=>{
      it('List all product category', ()=>{
        cy.fixture("requests/get/whenIListAllProductCategory").then((listOfCategories)=>{
          cy.request({
              url: '/products/category-list',
              method: 'GET'
            }).then((response) => {
              expect(response.status).to.eq(200);
              expect(listOfCategories).to.deep.equal(response.body)
            })
        }) 
      })
    })

    describe('Get All Product detailed Category Tests', ()=>{
      it('List all product category', ()=>{
        cy.fixture("requests/get/whenIListAllDetailedProductCategory").then((listOfDetailedCategories)=>{
          cy.request({
              url: '/products/categories',
              method: 'GET'
            }).then((response) => {
              expect(response.status).to.eq(200);
              console.log(JSON.stringify(response.body))
              expect(listOfDetailedCategories).to.deep.equal(response.body)
            })
        }) 
      })
    })

    describe('Get Search Product Tests', () => {
      it('Search for all products of category ', ()=>{

      })
    })
})