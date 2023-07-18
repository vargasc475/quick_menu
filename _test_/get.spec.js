const server = require ('../app');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(server);

//const db = require('./models');


describe('Test Handlers', () => {
    test('responds to /', async () => {
        const res = await request.get('/getAdmin');
        //expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

  test('responds to /users', async () => {
        const res = await request.get('/getDesserts');
      //expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

  test('responds to /users', async () => {
        const res = await request.get('/getDishes');
      //expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })
})

/*

beforeEach(async () => {
    await db.mongoose.connect(db.url);
  });

  
  
 
  afterEach(async () => {
    await mongoose.connection.close();
  });

  describe("GET /api/products", () => {
    it("should return all products", async () => {
      const res = await request.get("/getAdmin");
      expect(res.statusCode).toBe(200);
      //expect(res.body.length).toBeGreaterThan(0);
    });
  });*/