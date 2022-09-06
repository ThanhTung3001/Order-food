const bcrypt = require('bcrypt');
const saltRounds = 10;

const SecurityUltils = {
    passwordDecode: (password) => {
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    },
    checkPassword: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }

}
module.exports = SecurityUltils;