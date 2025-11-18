import { db } from "../configFile/Firebase";

const collectionOfTasks = db.collection("tasks")

export type TaskType = {
    id:string
    name:string,
    description:string,
    status:string,
    priority:string,
    deadline:string
}


export const getTasks = async() =>{
    const tasks = await collectionOfTasks.get()
    const data = tasks.docs.map(doc=>doc.data())
    return data
}


export const addTask = async (data: TaskType) => {
  const newUser = await collectionOfTasks.doc(data.id).set(data);
  console.log(newUser);
  return data;
};


export const removeTask = async (id: string) =>{
    const task = await collectionOfTasks.doc(id).delete()
    console.log("successfully delete the task")
    return task
}

export const updateTask = async (id:string,data:TaskType) =>{
   const tasks = await collectionOfTasks.get()
   const task = tasks.docs.find(doc=>doc.id === id)
   if(!task){
     return "the id didn't match with any id"
   }
   return collectionOfTasks.doc(id).update(data)
}


