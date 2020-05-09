const express = require('express');
const router = express.Router();
const Task = require('../models/task')


// create task
router.post("/tasks", async (req,res)=>{
    const task = new Task(req.body);
    try{
        await task.save()
        res.sendStatus(201)
    } catch(e){
        res.status(400).send(e);
    }
})

// fetch tasks
router.get("/tasks",async (req,res)=>{
    try{
        const tasks = await Task.find()
        res.send(tasks);
    }
    catch(e){
        res.status(400).send(e);
    }
})
//  fetch task with id
router.get("/task/:id", async(req,res)=>{
    const _id = req.params.id;
    try{
        const task = await Task.findById(_id);
        if(!task){
            return res.sendStatus(404);
        }
        res.send(task)
    }catch(e){
        res.sendStatus(500);
}
})

// update task
router.patch("/task/update/:id", async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description','completed'];
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update);
    })
        if(!isValidOperation){
            return res.status(400).send({error:'invalid updates!'})
        }
        try{
            const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
            if(!task){
                return res.status(404).send()
            }
            res.send(task);
        } catch(e){
            res.status(500).send(e);
        }
    })
    
    // delete task
router.delete('/task/remove/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router;