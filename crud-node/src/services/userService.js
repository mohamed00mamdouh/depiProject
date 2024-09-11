const User=require('../models/user')

class UserService{
    async createUser(name, email, phone){
        const newUser=  new User({name, email, phone})
        return await newUser.save();
    }
    async getAllUsers(){
        return await User.find()
    }
}

module.exports=new UserService()