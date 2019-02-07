import React from "react";



const Operators =(props)=>{

    return(
        <>
            <button className="button col-3 orange" value='AC' onClick={props.handleClick} > AC </button>
            <button className="button col-3 orange" value='%' onClick={props.handleClick} > % </button> 
            <button className="button col-3 orange" value="±" onClick={props.handleClick} > ± </button>
            <button className="button col-3 orange" value='÷' onClick={props.handleClick} > ÷ </button>

        </>
    );
}

export default Operators;