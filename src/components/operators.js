import React from "react";



const Operators =(props)=>{

    return(
        <>
            <button className="button col-3 " value='AC' alt='C' onDoubleClick={props.handleClick} onClick={props.handleClick} >AC</button>
            <button className="button col-3 " value='%' onClick={props.handleClick} > % </button> 
            <button className="button col-3 " value="±" onClick={props.handleClick} > ± </button>
            <button className="button col-3 orange " value='÷' onClick={props.handleClick} > ÷ </button>

        </>
    );
}

export default Operators;