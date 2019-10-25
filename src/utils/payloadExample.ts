/**
 *
 */
export interface ITask {
    name: string;
    description: string;
    estimate: number;
    state: 'Planned' | 'In progress' | 'Completed';
}

/**
 *
 */
export const payloadExample: ITask[] = [
    {
        name: 'Do shopping',
        description: 'Buy groceries at the Co-op for the next week',
        estimate: 60,
        state: 'Planned'
    },
    {
        name: 'Go hiking',
        description: 'Complete the Moose Mountain trail this Saturday, Oct 26, 2019',
        estimate: 360,
        state: 'Planned'
    },
    {
        name: 'Oil change',
        description: 'Do oil change',
        estimate: 60,
        state: 'In progress'
    },
    {
        name: 'Implement the settings screen for SearchBusiness app',
        description: 'Complete implementing the settings screen for your Search Business app',
        estimate: 90,
        state: 'Completed'
    },
    {
        name: 'Do shopping',
        description: 'Buy groceries at the Co-op for the next week',
        estimate: 60,
        state: 'Planned'
    },
    {
        name: 'Go hiking',
        description: 'Complete the Moose Mountain trail this Saturday, Oct 26, 2019',
        estimate: 360,
        state: 'Planned'
    },
    {
        name: 'Oil change',
        description: 'Do oil change',
        estimate: 60,
        state: 'In progress'
    },
    {
        name: 'Implement the settings screen for SearchBusiness app',
        description: 'Complete implementing the settings screen for your Search Business app',
        estimate: 90,
        state: 'Completed'
    },
]; // End of payloadExample
// End of file
