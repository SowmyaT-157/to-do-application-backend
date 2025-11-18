import { Request, Response } from "express";
import {  addTask, getTasks, TaskType } from "../services/tasksData";


export const getAllTasks = async (req:Request,res:Response) =>{
    try{
        const task = await getTasks()
        if(task){
            return res.status(200).json({message:"fetched the data",task})            
        }else{
            return res.status(400).send("didn't fetched the tasks data")
        }
    }catch{
        return res.status(404).send({message:"The task data not fetching"})
    }
}

export const addTheNewTask = async (req: Request, res: Response) => {
  try {
    const taskData = req.body;
    console.log("Please give me taskdata...", taskData);
    const task = await addTask(taskData);
    console.log("please show ...",task);
    return res.status(201).json({message:"successfully add the task"});
  } catch (error) {
    return res.status(400).json({ message: "task not created", error });
  }
};  

