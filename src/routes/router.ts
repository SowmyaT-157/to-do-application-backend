import { Router } from "express";
import {  addTheNewTask, getAllTasks } from "../controllers/taskController";


export const router = Router()
router.get('/getTasks',getAllTasks)
router.post('/addTask',addTheNewTask)