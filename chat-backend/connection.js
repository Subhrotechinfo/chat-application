const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@employeemanagement.obiv22i.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('Connected to Mongodb Database')
})
