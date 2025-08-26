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

    })
})