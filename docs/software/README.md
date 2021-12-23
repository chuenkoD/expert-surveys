# Реалізація інформаційного та програмного забезпечення

SQL-скрипт для створення на початкового наповнення бази даних:
```sql
-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`User`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (1, 'user1', 'user1@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (2, 'user2', 'user2@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (3, 'user3', 'user3@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (4, 'user4', 'user4@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (5, 'user5', 'user5@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (6, 'user6', 'user6@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (7, 'user7', 'user7@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (8, 'user8', 'user8@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (9, 'user9', 'user9@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (10, 'user10', 'user10@mail.com');

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Alt`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (1, 'minmax', '4');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (2, 'select', 'select5');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (3, 'radiobutton', '3');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (4, 'select', 'select2');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (5, 'minmax', '3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Expert`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (1, 'job1', 1);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (2, 'job1', 2);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (3, 'job2', 3);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (4, 'job3', 4);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (5, 'job2', 5);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (6, 'job1', 6);

COMMIT;


-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`SelectedAlt`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (1, 2);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (2, 1);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (3, 3);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (4, 4);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (5, 4);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (6, 2);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (7, 5);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (8, 1);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (9, 2);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (10, 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Survey`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (1, 'text1', 'typ1', 'topic1', '1970-01-01');
INSERT INTO `ExpertSurveys`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (2, 'text2', 'type2', 'topic1', '1970-01-01');
INSERT INTO `ExpertSurveys`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (3, 'text3', 'type3', 'topic2', '1970-01-01');

COMMIT;



-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`SurveyState`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`SurveyState` (`id`, `name`) VALUES (1, 'Done');
INSERT INTO `ExpertSurveys`.`SurveyState` (`id`, `name`) VALUES (2, 'Progress');
INSERT INTO `ExpertSurveys`.`SurveyState` (`id`, `name`) VALUES (3, 'Checking');

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`SurveyAction`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`SurveyAction` (`id`, `at`, `Survey_id`, `SurveyState_id`) VALUES (1, '1970-01-01', 1, 1);

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Question`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (1, 'type1', 'Question1', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (2, 'type1', 'Question2', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (3, 'type2', 'Question3', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (4, 'type1', 'Question4', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (5, 'type4', 'Question5', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (6, 'type5', 'Question6', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (7, 'type2', 'Question7', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (8, 'type6', 'Question8', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (9, 'type5', 'Question9', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (10, 'type5', 'Question10', 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Answer`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (1, 'text1', '1970-01-01', 1, 1, 1);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (2, 'text2', '1970-01-01', 1, 2, 3);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (3, 'text3', '1970-01-01', 2, 1, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (4, 'text4', '1970-01-01', 2, 2, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (5, 'text5', '1970-01-01', 3, 2, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (6, 'text6', '1970-01-01', 4, 1, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (7, 'text7', '1970-01-01', 4, 2, 1);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (8, 'text8', '1970-01-01', 5, 1, 1);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (9, 'text9', '1970-01-01', 5, 2, 2);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (10, 'text10', '1970-01-01', 6, 1, 4);

COMMIT;
```

RESTfull сервіс для управління даними
```js
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
        await user.update(req.body.updateData);
    } else {
        res.send('{error: no data}');
    }
});

app.put('/expert/:id', async (req, res) => {
    if (req.body.updateData) {
        const expert = await models.Expert.findByPk(req.params.id);
        await expert.update(req.body.updateData);
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
    } catch (e) {
        res.send(`{error: ${e.message}`);
    }

});


app.listen(3000, async () => {
    await connection.sync();
    console.log('Api started');
})
```
Опис кінцевих точок RESTfull сервісу доступу до даних
GET
/users - Отримати список користувачів
/experts - Отримати список експертів
/user/:id - Отримати користувача
/expert/:id - Отримати список експерта
POST
/user - Створити нового користувача
/experts - Створити нового експерта
PUT
/user - Оновити дані користувача
/experts - Оновити дані експерта
DELETE
/user/:id - Видалити користувача та експерта з таким id
