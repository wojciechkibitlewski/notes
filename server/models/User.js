const mongoose = require('moongose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        require: true
    },
   
})

module.exports = mongoose.model('User', userSchema)