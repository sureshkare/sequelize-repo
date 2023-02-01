const express = require("express");
const sequelize = require('./database');
const User = require('./User');

sequelize.sync().then(() => console.log("db is ready"));

const app = express();

app.post('/users', (req, res) => {
    User.create(req.body).then(() => {
        res.send("user is inserted")
    })
})

app.listen(3004, () => {
    console.log("server is listening to port 3005")
});