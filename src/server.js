
const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('../src/models/restaurant');
const Item = require('../src/models/Item');


const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/restaurant' , (req , res) => {
    res.json(Restaurant);
})

app.get('/item' , (req , res) => {
    res.json(Item);
})


mongoose
  .connect("mongodb+srv://anil:anil30@database-ca1.3uv09.mongodb.net/")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error));

