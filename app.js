const express = require("express");
const db = require("./db");
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: './.env' })
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.render('index')
})
const pubilcDirectory = path.join(__dirname, './public')
app.use(express.static(pubilcDirectory))
app.set('view engine', 'hbs')
app.listen(port, () => {
    console.log(`server is started http://localhost:${port}`)
})

