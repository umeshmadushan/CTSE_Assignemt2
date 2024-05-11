const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const courseRoute = require('./route/courseRoute');
const { connectToDatabase } = require('./config/database');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 6300;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'pages'));

// Welcome route
app.get('/', (req, res) => {
 res.render('index.ejs')
});
// Routes
app.use('/course', courseRoute);

// Connect to MongoDB
connectToDatabase();

// Logging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Logging middleware to log server errors
// Logging middleware to log server errors
app.use((err, req, res, ) => {
  console.error(`[${new Date().toISOString()}] Server error: ${err}`);
  res.status(500).send('Internal Server Error');
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
