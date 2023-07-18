const app = require('../app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('DELETE /deleteAdmin/:id, /deleteDessert/:id, /deleteDish, /deleteOrder  ', () => {
    test('DELETE /deleteAdmin/:id, ', async () => {
        const res = await request.delete('/deleteAdmin/64b6b4cfc2aae7b664ef7817').send();
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    });

    test('DELETE /deleteDessert/:id', async () => {
      const res = await request.delete('/deleteDessert/64b6dffe0c2f1ffa2b2600f7').send();
      expect(res.header['content-type']).toBe('application/json; charset=utf-8');
      expect(res.statusCode).toBe(200)
  });

    test('DELETE /deleteDish/:id', async () => {
      const res = await request.delete('/deleteDish/64b6e12296f13a24bce5fe44').send();
      expect(res.header['content-type']).toBe('application/json; charset=utf-8');
      expect(res.statusCode).toBe(200)
    });

    test('DELETE /deleteOrder/:id', async () => {
      const res = await request.delete('/deleteOrder/64b6e12296f13a24bce5fe46').send();
      expect(res.header['content-type']).toBe('application/json; charset=utf-8');
      expect(res.statusCode).toBe(200)
    });

    
})