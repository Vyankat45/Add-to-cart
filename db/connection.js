const mongoose = require("mongoose");
  


const ConnectDb = (uri) =>{
    console.log("connection")
   return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    
};

module.exports = ConnectDb;