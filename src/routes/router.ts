import { Router } from "express";
import {  addTheNewTask, getAllTasks, removeTheTask } from "../controllers/taskController";


export const router = Router()
router.get('/getTasks',getAllTasks)
router.post('/addTask',addTheNewTask)
router.delete('/deleteTask/:id',removeTheTask )