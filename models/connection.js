const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING;

mongoose.set("strictQuery", false); 

mongoose.connect(connectionString, { connectTimeoutMS: 2000})
.then(() => console.log('tickethack Database connected. Ready to use trips collection. '))
.catch(error => console.error(error));

module.exports=connectionString;