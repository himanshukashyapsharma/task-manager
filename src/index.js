const express = require('express');
const app = express();
require('./db/mongoose');
const userRoutes = require('./Routers/user-routes.js');
const taskRoutes = require('./Routers/task-routes.js')
app.use(userRoutes);
app.use(taskRoutes);



app.use(express.json())
const port = process.env.PORT || 3000


app.listen(port,()=>{
console.log('server is running on port ' + port)
})
