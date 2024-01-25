const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const taskControllers = require("./controllers/taskController");

dotenv.config();

const app = express();

app.use(express.json());

app.post("/tasks",taskControllers.createTask);
app.get("/tasks",taskControllers.getTasks);
app.get("/tasks/:id",taskControllers.getTaskById);
app.patch("/tasks/:id",taskControllers.updateTask);
app.delete("/tasks/:id",taskControllers.deleteTask);

app.get("/:id", (req,res) => {
    //res.send("GET request");
    res.status(200).json({
        message:"hello",
        id: req.params.id
});
});

app.post("/:id",(req,res) => {
    res.status(200).json(req.body);
})

mongoose.connect("mongodb+srv://anishajoseph385:anisha@cluster0.an5su3o.mongodb.net/?retryWrites=true&w=majority").then(() =>{
    console.log("db connected")
}).catch((err) => {
        console.log(err);
    });
    
app.listen(process.env.PORT,() => {
    console.log("server is running on ",process.env.PORT);
});

const {display,getDetails}=require("./student");
console.log("hello world");
display();
getDetails();
// const server = http.createServer((req, res) => {
//     res.writeHead(200,{"content-Type":"text/plain"});
//     res.end("koko world");
// });
// server.listen(process.env.PORT,() =>{
//     console.log("server is running on ",process.env.PORT);
// });
