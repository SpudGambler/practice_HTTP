const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routerApi = require('./src/routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./src/handlers/errors.handler');
require('dotenv').config();

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log('Active port', port));

/* Endpoint: http://localhost:4000 */
app.get('/', (req, res) => {
  res.send('Actividad A Completar Mamaguevo');
});

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Success connection with mongo'))
  .catch((error) => console.error(error));

/* Respuestas a solicitudes http en formato JSON */
app.use(express.json());


/* Permitir hacer el llamado de los request */
routerApi(app);