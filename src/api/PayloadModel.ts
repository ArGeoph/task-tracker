export interface ITask {
    id: number;
    name: string;
    description: string;
    estimate: string;
    state: 'Planned' | 'In progress' | 'Completed';
}
