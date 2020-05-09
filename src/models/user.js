const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name:{
        type : String, 
        required:true,
        trim:true,
        
    },
    age:{
        type : Number, 
        default:0,
        validate(value){
            if(value<0){
                throw new Error("Age cannot be negative");
            }
        }
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Invalid Email!')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
             if(value.lowercase == "password"){
                throw new Error("password cannot be 'password' !")
            }
        }
        
    }
});

//learn middleware properly!
userSchema.pre('save',async function(){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,10)
    }
    next();
})
const User = mongoose.model('User',userSchema);

module.exports = User;
