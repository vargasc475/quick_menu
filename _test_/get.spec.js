const server = require ('../app');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server);

describe('Test Handlers', () => {
    test('responds to /', async () => {
        const res = await request.get('/');
        expect(res.header['content-type']).toBe("text/html; charset=utf-8");
        expect(res.statusCode).toBe(200);
    })

 test('responds to /admins', async () => {
        const res = await request.get('/getAdmins');
      expect(res.header['content-type']).toBe("text/html; charset=utf-8");
        expect(res.statusCode).toBe(404)
    })
})