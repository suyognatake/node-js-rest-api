const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRoute = require('./api/routes/student');
const facultyRoute = require('./api/routes/faculty');
const teacherRoute = require('./api/routes/teacher');

mongoose.connect('mongodb+srv://devsuyog1999:nM7gux8cJX7drsyC@student.pr2ig3m.mongodb.net/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection failed', err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/student', studentRoute);
app.use('/faculty', facultyRoute);
app.use('/teacher', teacherRoute);

app.use((req, res, next) => {
  res.status(404).json({
    msg: 'Bad Request!!!'
  })
})

module.exports = app;