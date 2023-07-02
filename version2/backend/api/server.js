const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

app.use(express.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const mongoURI = process.env.MONGODB_URI;

async function startServer() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
    
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();

app.use('/api', apiRoutes);