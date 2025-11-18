import { Request, Response } from "express";
import {  addTask, getTasks, removeTask} from "../services/tasksData";


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

export const removeTheTask = async (req:Request, res: Response) =>{
    try{
        const id = req.params.id
        const deleteTask = await removeTask(id.toString())
        if(!id){
            return res.status(404).json({message:"id didn't match any id"})
        }else{
        return res.status(200).json({message:"successfully delete the task",deleteTask})
        }
    }
    catch{
        return res.status(400).json({message:"task didn`t deleted"})
    }
}

