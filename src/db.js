const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo-socket")
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("error")
})