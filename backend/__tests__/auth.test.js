const request = require('supertest');
const express = require('express');
const app = express();
const authRoutes = require('../routes/auth.routes');

app.use(express.json());
app.use('/api', authRoutes);

describe('Auth Routes', () => {
  it('POST /api/register → success', async () => {
    const res = await request(app).post('/api/register').send({
      username: 'testuser1',
      password: 'Test_12345',
      name: 'Test User',
      role: 'admin_hr'
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('username', 'testuser1');
  });

  it('POST /api/login → success', async () => {
    const res = await request(app).post('/api/login').send({
      username: 'testuser1',
      password: 'Test_12345'
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('token');
  });
});
