const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Active port', port));

app.get('/', (req, res) => {
    res.send('Actividad A Completar Mamaguevo');
});

app.use(express.json());