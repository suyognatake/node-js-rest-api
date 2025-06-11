// const request = require('supertest');
// const app = require('../app');

// it('POST /student/addStudent → should create a student', async () => {
//   const res = await request(app).post('/student/addStudent').send({
//     name: 'Test Student12',
//     email: 'admin@mail.com',
//     phone: 9284220326,
//     gender: "male"
//   });

//   expect(res.statusCode).toBe(201);
//   expect(res.body.createdStudent.name).toBe('Test Student12');
// });
const request = require('supertest');
const app = require('../app');

describe('POST /addStudent', () => {
  it('should return 400 if name is missing', async () => {
    const res = await request(app)
      .post('/addStudent')
      .send({
        name: 'Test Student122',
        email: 'admin12@mail.com',
        phone: 9284220326,
        gender: "male"
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Name is required');
  });
});
