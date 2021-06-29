('use strict');
const supertest = require('supertest');
const {server} = require('../server');
//Accessing app to have the ability to send requests
const request = supertest(server);

describe('API Server', () => {
  it('404 on bad route and method', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('handles correct routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);

  });
  it('get clothes by id', async () => {
    const result = await request.get('/clothes/:id');
    expect(result.status).toEqual(200);
  });


  it('get all clothes', async () => {
    const result = await request.get('/clothes/');
    expect(result.status).toEqual(200);
  });

  it('update clothes', async () => {

    const NewUpdatedData={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await request.put('/clothes/:id').send(NewUpdatedData);
    expect(result.status).toEqual(200);
  });

  it('delete clothes by id', async () => {
    const result = await request.delete('/clothes/:id');
    expect(result.status).toEqual(200);
  });

  
  it('add clothes', async () => {

    const data={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await request.post('/clothes').send(data);

    //Supertest savind data in body object
    expect(result.status).toEqual(201);

  });

});