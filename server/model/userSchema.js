const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SECRET_KEY="MYFRIENDOMKARHARISHROHITMAHESHARUNTARUN"
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    cPassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    verifytoken:{
        type:String
    }
})

userSchema.pre('save',async function(next){
    console.log("Password secured");
    if(this.isModified('Password')){
        this.Password =await bcrypt.hash(this.Password,12);
        this.cPassword =await bcrypt.hash(this.cPassword,12);
    }
    next();
});

// We are generating token 
userSchema.methods.generateAuthToken = async function (){
    try {
        console.log("token generated");
        let token = jwt.sign({_id:this._id},SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
    
}

const  User = mongoose.model('STUDENT_COLLECTION',userSchema);
module.exports = User;