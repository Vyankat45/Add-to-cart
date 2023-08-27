const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
       
    },
    icon:{
        type:String,
        
    },
    color:{
        type:String,
        
    },
    
});

//Export the model
const Category = mongoose.model('Category', CategorySchema);

module.exports = { Category };