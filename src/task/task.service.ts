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

}
