
const UserModel = require('../model/user.model');
const JWTUltil = require('../ultils/jwt.ultil');

const Filter = {
    adminAuth: (req, res, next) => {
        var authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(' ')[1];
        var decoded = JWTUltil.verifyToken(token);
        if (decoded.data != null) {
            var username = decoded.data;
            UserModel.findOne({ username }, (err, user) => {
                if (user == null) {
                    res.status(400).json({
                        message: "User was lock or deleted",
                        code: 400
                    })
                } else {
                    next();
                }
            })

        } else {
            res.status(403).json({
                message: "Token not valid",
                code: 403
            })
        }

    }
}
module.exports = Filter;