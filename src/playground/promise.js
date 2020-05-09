require("../db/mongoose");
const User = require("../models/user");
const Task = require("../models/task");


    // User.findByIdAndUpdate("5eb1b07762fff50c8022e7ba",{age:1}).then((user)=>{
    //     console.log(user);
    //     return User.countDocuments({age:1}).then((count)=>{
    //         console.log(count);   
    //     }).catch((e)=>{
    //         res.status(500).send(e);
    //     })
    // })

    // Task.findByIdAndUpdate("5eb2ddd6a4d1a136d009acf1",{completed:false}).then((task)=>{
    //     console.log(task);
    //     return Task.countDocuments({completed:false}).then((count)=>{
    //         console.log(count); 
    //     }).catch((e)=>{
    //         console.log(e);
    //     })
    // })



    // delete functionality
    // Task.findByIdAndDelete("5eb2ddd5a4d1a136d009acf0").then(()=>{
    //     console.log("Task deleted");
    //     return Task.countDocuments({completed:false}).then((count)=>{
    //         console.log("incomplete tasks:- " + count);
    //     }).catch((e)=>{
    //         console.log(e);
            
    //     })
    // })
// })

// update functionality using async awaits

// const updateAndCount = async (id)=>{
// const task = await Task.findByIdAndUpdate(id,{completed:true});
// const count = await Task.countDocuments({completed:false});
// return count;
// }
// updateAndCount("5eb2d9ca70d67e28dccd63d6").then((count)=>{
//     console.log(count);
    
// }).catch((e)=>{
//     console.log(e);
// })
// awaits delete and count functionality
// const deleteAndCount = async(id)=>{
//     const task = await Task.findByIdAndDelete(id);
//     const count = await Task.countDocuments();
//     return count;
// }
// deleteAndCount("5eb2cedc3f23cd1cdcfb4e68").then((count)=>{
//     console.log(count);
    
// }).catch((e)=>{
//     console.log(e);
// })