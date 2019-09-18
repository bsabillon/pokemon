const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.get('/',(req,res)=> res.send('Success'));

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  app.use('/pokemons',require('./routes/pokemons'));
  


  app.listen(PORT,console.log(`Server started on port ${PORT}`));