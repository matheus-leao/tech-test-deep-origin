import { expect } from 'chai';
import { ProductResponseBody as ProductResponseBody } from '../support/model/productModel';

describe('Product Tests', () => {
    describe('GET /products', ()=>{
        it('When I make a get request, should return 30 products', () => {
          cy.request({
            url: '/products',
            method: 'GET'
          }).then((response) => {
            expect(response.status).to.eq(200);
            const producResponseBody = response.body as ProductResponseBody;
            expect(producResponseBody.products.length).to.eq(30)
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
        it('When I make a get request with 5 limit, should return 5 products', () => {
          const limitExpected = 5;
          cy.request({
            url: '/products',
            method: 'GET',
            qs: {
              limit: limitExpected
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            const producResponseBody = response.body as ProductResponseBody;
            expect(producResponseBody.products.length).to.eq(limitExpected)
          })
        })


    })
})