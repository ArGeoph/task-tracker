import React from 'react';
import './Header.css';

// Interfaces
interface Props {
    text: string;
}

/**
 *
 * @param props
 * @constructor
 */
export const Header = (props: Props) => {
    return (
        <header className="App-header">
            {props.text}
        </header>
    );
}; // End of functional component
// End of file
