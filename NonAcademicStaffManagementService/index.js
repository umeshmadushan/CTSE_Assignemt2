// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nonAcademicStaffRoute = require('./route/nonAcademicStaffRoute');
const { connectToDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5300;

app.use(bodyParser.json());
app.use(cors());

app.use('/nonAcademicStaff', nonAcademicStaffRoute); // Use non-academic staff routes

connectToDatabase();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Server error: ${err}`);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
