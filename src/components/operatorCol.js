import React from 'react';

const OperatorsCol =(props)=>{

    return(
        <>
            <div className="col-3 opera">
                <button className="button col-12 orange " value="-" onClick={props.handleClick} > - </button>
                <button className="button col-12 orange" value="+" onClick={props.handleClick} > + </button>
                <button className="button col-12 orange" value='x' onClick={props.handleClick} > x </button>
                <button className="button col-12 orange" value="=" onClick={props.handleClick} > = </button> 
            </div>
        </>
    );
}

export default OperatorsCol;

