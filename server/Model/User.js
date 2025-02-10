const mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    message:{type:String}
});
const User=mongoose.model("User",userSchema);
module.exports=User;
