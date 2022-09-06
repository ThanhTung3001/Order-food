
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const JWTUltil = {
    getAccessToken: (username) => {
        return jwt.sign({
            data: username
        }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60, });
        // return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '10h', algorithm: 'ES256' });
    },
    verifyToken: (token) => {
        try {
            var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            return decoded;
        } catch (err) {
            throw err;
        }

    }
}
module.exports = JWTUltil;