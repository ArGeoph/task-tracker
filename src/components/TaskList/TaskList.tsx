import React from 'react';
import './TaskList.css';

// Interfaces
interface Props {
    text: string;
}

/**
 *
 * @param props
 * @constructor
 */
export const TaskList = (props: Props) => {
    return (
        <div className='TaskList-container'>
            You don't have tasks
        </div>
    );
}; // End of functional component
// End of file
