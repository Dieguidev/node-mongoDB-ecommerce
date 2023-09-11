import request from 'supertest';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.satatus(200).json({ name: 'diguidev' });
});

app.listen(4000);
const api = request(app);

describe('test for app', () => {
  test('GET /', async () => {
    const response = await api.get('/');
    console.log(response);
    expect(response).toBeTruthy();
  });
});
