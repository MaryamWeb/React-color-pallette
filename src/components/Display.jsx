import React from 'react';

const Display=(props)=> {
     
	return ( 
        <div className="display-palette">
            <div className="display-palette-row">
                {props.colors.map((color,i)=><div key={i} style={{backgroundColor:`${color}`}}><p>{color}</p></div>)}
            </div>
        </div> 
    )
}

export default Display;
