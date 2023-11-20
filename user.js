const mongoose = require('mongoose')
//to connect  two database and getting data and storing in another one
const {ObjectId}=mongoose.Schema;

const userSchema = new mongoose.Schema({
    //name:"abcdef"
    name:String,
    email:{
        type:String,
        require:true,
        index:true,
    },
    role:{
        type:String,
        default:"customer"
    },
    cart:{
        type:Array,
        default:[],
    },
    //wishlist
    //phonenumber
    address:String
},{timestamps:true})


module.exports=mongoose.model('User',userSchema)