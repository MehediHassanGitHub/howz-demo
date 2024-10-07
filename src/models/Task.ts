export interface Task {
    id: number;
    name: string;
    frequency: string;
    area: string;
    dueDate: Date;
    timeSpent: number;
    progress: number;
}