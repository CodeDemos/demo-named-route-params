'use strict';

const express = require('express');

const app = express();


app.get('/api/:make/:model/:year', (req, res) => {
  
  console.log(req.params);
  // const make = req.params.make;
  // const model = req.params.model;
  // const year = req.params.year;

  const {make, model, year} = req.params;
  
  // res.json( { make:make, model:model, year:year } );
  res.json( { make, model, yr: year } );
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
