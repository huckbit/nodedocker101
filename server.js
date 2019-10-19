'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Dokerise a node js application.\n');
});

app.get('/info', (req, res) => {
    res.status(200).send({ message: "Example app to test nodejs docker" });
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);