
const express = require('express')
const app = express()
const port = 3000
const initDb = require('./database/db.init');
const UserModel = require('./model/user.model')
const authController = require('./Controllers/auth.controller');
const JWTUltil = require("./ultils/jwt.ultil")
const Filter = require('./auth/auth');
app.use(express.json())
app.post('/', (req, res) => {
    authController.register(req, res);
})
app.get('/admin', Filter.adminAuth, (req, res) => {
    res.json({
        message: 'authorization',
        code: 200
    })
})
app.post("/login", authController.login);
app.listen(port, () => console.log(`Web app listening on port ${port}!`))
