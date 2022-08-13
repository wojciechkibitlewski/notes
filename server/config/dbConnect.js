const mongoose = require('mongoose');

DB_URL = "mongodb+srv://mernsocial:bb3bKNPFxTIfKLGn@cluster0.f8ckw.mongodb.net/?retryWrites=true&w=majority"
//const dbUrl = 
const connectDb = async () => {
    try {
        //await mongoose.connect(process.env.DB_URI)
        await mongoose.connect(process.env.DB_URI || DB_URL)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;