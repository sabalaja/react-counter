import React from 'react';

const ButtonsPanel = props => {
    return (
        <div>
            <button onClick={props.addValue}>Add 1</button>
            <button onClick={() => props.resetSet(true)}>Reset</button>
            <button onClick={() => props.resetSet(false)}>Set 0</button>
        </div>
    );
}

export default ButtonsPanel;