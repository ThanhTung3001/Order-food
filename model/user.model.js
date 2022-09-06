const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    dateOfBirth: { type: Date, default: new Date() },
    email: String,
    phoneNumber: String,
    address: String
});

module.exports = mongoose.model('user', UserModel);
