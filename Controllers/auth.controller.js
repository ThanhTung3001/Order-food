const UserModel = require('../model/user.model');
const SecurityUltils = require('../ultils/bcrypt.ultil');
const JWTUltil = require('../ultils/jwt.ultil');

const authController = {
    register: (req, res) => {
        // console.log(req)
        let username = req.body.username;
        UserModel.find({ username: username }, (err, users) => {
            if (!err) {
                if (users.length == 0) {
                    let user = new UserModel({
                        username: username,
                        password: SecurityUltils.passwordDecode(req.body.password),
                        email: req.body.email
                    });
                    try {
                        user.save();
                        res.json({
                            message: "Resgister user success",
                            code: 200
                        })
                    } catch (error) {
                        res.status(500)
                            .json({
                                message: "Register fail",
                                code: 500
                            })
                    }
                } else {
                    res.status(409).json({
                        message: "Username is exist",
                        code: 409
                    })
                }

            }
        })
    },
    login: (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        UserModel.findOne({ username }, (err, user) => {
            if (user != null) {
                var isValid = SecurityUltils.checkPassword(password, user.password);
                if (isValid) {
                    var token = JWTUltil.getAccessToken(username);
                    res.json({
                        message: "Login success",
                        code: 200,
                        token: token
                    })
                } else {
                    res.status(401).json({
                        message: "Password wrong",
                        code: 401
                    })
                }
            } else {
                res.status(401).json({
                    message: "username not exist",
                    code: 200
                })
            }
        })
    },
    refreshToken: (req, res) => {

    }
}
module.exports = authController;