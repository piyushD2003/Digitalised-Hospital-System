const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://MongoHMS:dhyanipiyu7@cluster0.v5ntdgt.mongodb.net/'

const connectToMongo =()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;