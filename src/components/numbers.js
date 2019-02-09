import React from "react";

const Numbers =(props)=>{
    return(
        <>
          <div className='col-9'>
            <div className='row'>
                <button className="button col-4" value='9' attribute='number' onClick={props.handleClick}> 9 </button>
                <button className="button col-4" value='8' attribute="number" onClick={props.handleClick}> 8 </button>
                <button className="button col-4" value='7' attribute="number" onClick={props.handleClick}> 7 </button>
                <button className="button col-4" value='6' attribute="number" onClick={props.handleClick}> 6 </button>
                <button className="button col-4" value='5' attribute="number" onClick={props.handleClick}> 5 </button>
                <button className="button col-4" value='4' attribute="number" onClick={props.handleClick}> 4 </button>
                <button className="button col-4" value='3' attribute="number" onClick={props.handleClick}> 3 </button>
                <button className="button col-4" value='2' attribute="number" onClick={props.handleClick}> 2 </button>
                <button className="button col-4" value='1' attribute="number" onClick={props.handleClick}> 1 </button>
                <button className="button col-8" value='0' attribute="number" onClick={props.handleClick}> 0 </button>
                <button className="button col-4" value='.' attribute="string" onClick={props.handleClick}> . </button>
            </div> 
         </div>
        </>
    );
}

export default Numbers;