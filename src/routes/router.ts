import { Router } from "express";
import {  addTheNewTask, getAllTasks, removeTheTask, updateTheTask } from "../controllers/taskController";


export const router = Router()
router.get('/getTasks',getAllTasks)
router.post('/addTask',addTheNewTask)
router.delete('/deleteTask/:id',removeTheTask )
router.patch('/updateTask/:id',updateTheTask)