const User=require('../models/user')

class UserService{
    async createUser(name, email, phone){
        const newUser=  new User({name, email, phone})
        return await newUser.save();
    }
    
    async getAllUsers(){
        return await User.find()
    }

    async getUserById(userId){
        return await User.findById(userId);
    }
     

}

module.exports=new UserService()