const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/V_dev');
        console.log('Connect secessfully db !!!');
    } catch (error) {
        console.log('Connect failure db !!!');
    }
}

module.exports = { connect };
