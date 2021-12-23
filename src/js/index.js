const connection = require('./connection');
const express = require('express');
const models = require('./models');

const app = express();

app.get('/users', async (req, res) => {
    const users = await models.User.findAll();
    res.send(users);
});

app.get('/experts', async (req, res) => {
    const users = await models.Expert.findAll();
    res.send(users);
});

app.get('/user/:id', async (req, res) => {
    const user = (await models.Expert.findAll())[req.params.id];
    res.send(user);
});


app.listen(3000, async () => {
    await connection.sync();
    console.log('Api started');
})