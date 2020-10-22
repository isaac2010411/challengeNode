const mongoose = require('mongoose');

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const DATABASENAME =process.env.DB_NAME; 

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DATABASENAME}?retryWrites=true&w=majority`,{
    useUnifiedTopology:true,
    useNewUrlParser:true 
})
.then(db=> console.log('database conected'))
.catch(err=>console.log(err))

module.exports = mongoose;