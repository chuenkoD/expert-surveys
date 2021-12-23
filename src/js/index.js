const connection = require('./connection');
const express = require('express');

const app = express();

app.get('/users', async (req, res) => {
    
});

app.listen(3000, async () => {
    await connection.sync();
    console.log('Api started');
})