import React from 'react';

const Cars = (props) => {

    return (
        <div className='auto'>
            <p onMouseDown={props.mouseDown}> I am a {props.name}  {props.type}</p>  
        </div>
    )     
    
};

export default Cars;