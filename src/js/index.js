const connection = require('./connection');
const express = require('express');
const models = require('./models');
const db = require('mysql2');


const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await models.User.findAll();
    res.send(users);
});

app.get('/experts', async (req, res) => {
    const users = await models.Expert.findAll();
    res.send(users);
});

app.get('/user/:id', async (req, res) => {
    const user = (await models.User.findAll())[req.params.id];
    res.send(user);
});

app.get('/expert/:id', async (req, res) => {
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
    } catch (e) {
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
    } catch (e) {
        res.send(`{error: ${e.message}`);
    }
});

app.put('/user/:id', async (req, res) => {
    if (req.body.updateData) {
        const user = await models.User.findByPk(req.params.id);
        console.log(user);
        await user.update(req.body.updateData);
        res.send('{response: 1}');
    } else {
        res.send('{error: no data}');
    }
});

app.put('/expert/:id', async (req, res) => {
    if (req.body.updateData) {
        const expert = await models.Expert.findByPk(req.params.id);
        await expert.update(req.body.updateData);
        res.send('{response: 1}');
    } else {
        res.send('{error: no data}');
    }
});

app.delete('/user/:id', async (req, res) => {
    try {
        await models.Expert.destroy({
                where: {
                    User_id: req.params.id
                }
            }
        );
        await models.User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('{response: 1}');
    } catch (e) {
        res.send(`{error: ${e.message}`);
    }

});


app.listen(3000, async () => {
    await connection.sync();
    console.log('Api started');
})