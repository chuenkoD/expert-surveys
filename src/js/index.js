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


app.post('/user', async (req, res) => {
    try {
        await models.User.create({
            mail: req.body.mail,
            username: req.body.username,
        });
        res.send('{response: 1}');
    }
    catch (e) {
            res.send(`{error: ${e.message}`);
        }
});

app.post('/expert', async (req, res) => {
    try {
        await models.Expert.create({
            job: req.body.job,
            User_id: req.body.id,
        });
        res.send('{response: 1}');
    }
    catch (e) {
        res.send(`{error: ${e.message}`);
    }
});


app.listen(3000, async () => {
    await connection.sync();
    console.log('Api started');
})