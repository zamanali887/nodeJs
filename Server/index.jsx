require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

let URL = process.env.DB_URL

mongoose.connect(URL)

const TodoModel = require("./src/Models/AddTodo");
app.use(cors())
app.use(express.json())

// Getting Todo From DateBase

// app.get("/getTodo", async (req, res) => {
//     const todos = await TodoModel.find()
    // const todos = await TodoModel.findById("652cb83277b65e7f5a73e305").exec();
//     res.send(todos)
// })

const todoRoutes = require('./src/routes/todoRoutes')
app.use("/" , todoRoutes)

// update Todo in DataBase

// app.post("/updateTodo", async (req, res) => {
//     let todo = req.body
//     await TodoModel.findByIdAndUpdate(todo._id, todo)

//     res.send("Todo Updated Successfully")
// })


// Delete Todo in DataBase

// app.post("/deleteTodo", async (req, res) => {
//     let todo = req.body
//     await TodoModel.findByIdAndDelete(todo._id)

//     res.send("Todo Deleted Successfully")
// })


const PORT = 8000
app.listen(PORT, () => {
    console.log('Server is runnig perfectly on port', PORT)
})
