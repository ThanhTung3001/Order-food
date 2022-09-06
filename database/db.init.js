const mongoose = require('mongoose');

const MongoDb = {
    init: async () => {
        try {
            await mongoose.connect('mongodb://localhost/order_food');
            console.log('connection succesfuly')
        } catch (error) {
            console.log(`connect fail ${error}`);
        }
    }
}
MongoDb.init();
module.exports = MongoDb;