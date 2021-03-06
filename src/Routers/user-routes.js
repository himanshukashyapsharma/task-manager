const express = require('express');
const router = express.Router();
const User = require('../models/user')




// create a user
router.post("/users", async(req,res)=>{
    const user =  new User(req.body);
    try{
        await user.save()
        res.sendStatus(201)
    }catch(e){
        res.status(400).send(e);
    }
})

// fetch users
router.get("/users",async (req,res)=>{
    try{
        const users = await User.find()
        res.send(users);
    }
    catch(e){
        res.sendStatus(400)
    }
})
// fetch user with id
router.get("/user/:id", async(req,res)=>{
    const _id = req.params.id;
    try{
        const user = await User.findById(_id);
        if(!user){
            return res.sendStatus(404);
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e);
}
})
//  update user
router.patch('/users/update/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        updates.forEach((update)=>user[update] = req.body[update]);
        await user.save();

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
//  delete user
router.delete("/user/remove/:id", async(req,res)=>{
    const _id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(_id);
        if(!user){
            return res.status(404).send();
        }
       res.send(user);

    }catch(e){
        res.status(500).send(e);
}
})
 
module.exports = router;