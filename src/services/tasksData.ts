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