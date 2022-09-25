import express from "express";
import todoController from "../controllers/todoController.js";

const todoRoute = express.Router();

todoRoute
.route('/todos')
.post(todoController.createTask)
.get(todoController.getAll)

todoRoute
.route('/todos/:id')
.delete(todoController.deleteSpecificTask)
.get(todoController.getSpecificTask)
.put(todoController.updateTask)


export default todoRoute;