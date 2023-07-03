const express = require('express');
const app = express();
const mongoose = require('mongoose');
 const PORT = 3001
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

 
 
  
  const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  
  //Routes go here
  app.all('*', (req,res) => {
      res.json({"every thing":"is awesome"})
  })
  
  //Connect to the database before listening
  connectDB().then(() => {
      app.listen(PORT, () => {
          console.log("listening for requests");
      })
  })