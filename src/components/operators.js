import React from "react";

const IfWaiting = (props) => {

    if (!props.stateOfWaitin) {
        return <button className="button col-3 orange" value='AC' onClick={props.handleClick}>AC</button>
    }
    else {
        return  <button className="button col-3 orange" value='C' onClick={props.handleClick}>C</button>
    }
}   

const Operators =(props)=>{

    return(
        <>  
            { IfWaiting(props) }
            <button className="button col-3 orange" value='%' onClick={props.handleClick} > % </button> 
            <button className="button col-3 orange" value="±" onClick={props.handleClick} > ± </button>
            <button className="button col-3 orange" value='÷' onClick={props.handleClick} > ÷ </button>

        </>
    );
}

export default Operators;