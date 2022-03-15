import { Injectable } from '@nestjs/common';
import {tasks} from "../models/task-data";
import {Task} from "../models/task-entity";

@Injectable()
export class TaskService {

 sendTasks():Task[]{
     return tasks;
 }

 addTask(task:Task){
     tasks.push(task)
 }

 findOne(id:number){
     var taskObj:Task;
     tasks.forEach(t=>{
         if(t.taskId==id){
             taskObj=t;
         }
     })

     return taskObj;
 }
    findName(name:string){
        var taskObj:Task;
        tasks.forEach(t=>{
            if(t.taskName==name){
                taskObj=t;
            }
        })

        return taskObj;
    }
}
