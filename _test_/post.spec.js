const app = require('../app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('Test Handlers', () => {
    test('responds to post /users', async () => {
        const res = await request.post('/newAdmin').send(    {
            user: "luis",
            password: "1011267",
                        
        });
        //expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(401)
    })

    
})