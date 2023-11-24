require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb+srv://ltvinh2509:${process.env.passAtlas}@cluster06592.xprgq9d.mongodb.net/admissions_subs?retryWrites=true&w=majority`;

async function connectLocal() {
    try {
        await mongoose.connect('mongodb://localhost:27017/V_dev');
        console.log('Connect secessfully db !!!');
    } catch (error) {
        console.log('Connect failure db !!!');
    }
}

async function connectAtlas() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect secessfully db !!!');
    } catch (error) {
        console.log('Connect failure db !!!');
    }
  }

module.exports = { connectLocal, connectAtlas };
