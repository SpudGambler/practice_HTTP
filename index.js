const mongoose = require('mongoose');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Active port', port));

app.get('/', (req, res) => {
  res.send('Actividad A Completar En La Web Mamaguevo');
});

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Success connection with mongo'))
  .catch((error) => console.error(error));

app.use(express.json());
