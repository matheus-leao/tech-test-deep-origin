import { expect } from 'chai';

describe('Product Tests', () => {
    describe('GET /products', ()=>{
        it('When I make a get request, should return all products', () => {
          cy.request({
            url: '/products',
            method: 'GET'
          }).then((response) => {
            expect(response.status).to.eq(200);
          })
        })

    })
})