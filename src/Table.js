import React from 'react';

function Table(props) {

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'center', alignSelf: 'center' }} >
                {props.children} 
            </div>
        </>
    )
}

export default Table;