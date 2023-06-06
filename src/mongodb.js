const mongoose = require("mongoose");
let Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://canice:canice@cluster0.csub7q6.mongodb.net/?retryWrites=true&w=majority",  {useNewUrlParser: true})
const connect = mongoose.connection;
connect.on('connected', function(){
    console.log('database is connected successfully');
})
connect.on('disconnected', function(){
    console.log('database is disconnected successfully');
})
connect.on('error', function(){
    console.log('database error occured');
})


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    password: {
        type: String,
        required: true
    }
})

const User = new mongoose.model("User", userSchema)

module.exports = User;