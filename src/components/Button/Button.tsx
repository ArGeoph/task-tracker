import React from 'react';
import './Button.css';

// Interfaces
interface Props {
    title: string;
    onPress: () => void;
}
// Interfaces end

/**
 *
 * @param props
 * @constructor
 */
export const Button = (props: Props) => {
    const { onPress, title } = props;

    return (
        <div className='Button-container'>
            {title}
        </div>
    );
}; // End of functional component TaskList
// End of file
