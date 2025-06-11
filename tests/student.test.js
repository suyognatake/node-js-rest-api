const request = require('supertest');
const app = require('../app');

it('POST /student/addStudent → should create a student', async () => {
  const res = await request(app).post('/student/addStudent').send({
    name: 'Test Student12',
    email: 'admin@mail.com',
    phone: 9284220326,
    gender: "male"
  });

  expect(res.statusCode).toBe(201);
  expect(res.body.createdStudent.name).toBe('Test Student12');
});
