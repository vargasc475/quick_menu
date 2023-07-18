const app = require('../app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('POST /newAdmin, /newDish, /newOrder, /newDessert', () => {
    test('POST /newAdmin', async () => {
        const res = await request.post('/newAdmin').send(    {
            user: "luis",
            password: "1011267",
                        
        });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    });

    
    test('POST /newDish', async () => {
        const res = await request.post('/newDish').send(  {
            id: "dish03",
            name: "desc03", 
            weight: "$1000",
            people: "dish03",
            takeHome: "desc03", 
            add: [
              "sddsd",
              "sdasd"
          ],
           
            price: "$1000"
          });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    });

    test('POST /newOrder', async () => {
        const res = await request.post('/newOrder').send(   {
            client: "client000",
            table: "10",
            dish: "64a89b340621c7f2ca749fdc",
            dessert:"64a89d5d0621c7f2ca749fe0",
            totalPrice: 1000 
          });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    });

    test('POST /newDessert', async () => {
        const res = await request.post('/newDessert').send(   {
            name: "typedata01",
            people: 10, 
            takeHome: "typedata01",
            price: "300"
          });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    });

    
});