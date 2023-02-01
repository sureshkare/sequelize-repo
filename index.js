const express = require("express")
const app = express()

app.listen(3004, () => {
    console.log("server is listening to port 3000")
})

app.get('/user', (req, res) => {
    res.send({
        "name": "suresh",
        "id": "120526"
    })
})