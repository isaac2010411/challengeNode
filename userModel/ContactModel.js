const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})


module.exports = mongoose.model( 'contact' , ContactSchema );
