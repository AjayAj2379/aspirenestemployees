export class Task{
    private _taskId:number;
    private _taskName:string;
    private _deadline:Date;
    constructor(taskId:number,taskName:string,deadline:Date) {
        this._taskId=taskId;
        this._taskName=taskName;
        this._deadline=deadline;
    }

    get taskId(): number {
        return this._taskId;
    }

    get taskName(): string {
        return this._taskName;
    }

    get deadline(): Date {
        return this._deadline;
    }
}
