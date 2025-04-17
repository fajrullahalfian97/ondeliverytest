const request = require('supertest');
const express = require('express');
const app = express();
const roomRoutes = require('../routes/rooms.routes');
const authRoutes = require('../routes/auth.routes');

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/rooms', roomRoutes);

let token = "";

beforeAll(async () => {
  await request(app).post('/api/register').send({
    username: 'testuser2',
    password: 'Test_12345',
    name: 'Test User 2',
    role: 'admin_hr'
  });

  const login = await request(app).post('/api/login').send({
    username: 'testuser2',
    password: 'Test_12345'
  });

  token = login.body.user.token;
});

describe('Room Routes', () => {
  it('POST /api/rooms → create room (authed)', async () => {
    const res = await request(app)
      .post('/api/rooms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Meeting Room 101',
        employees: 10,
        description: 'For internal discussions'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Meeting Room 101');
  });

  it('GET /api/rooms → list rooms (authed)', async () => {
    const res = await request(app)
      .get('/api/rooms')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
