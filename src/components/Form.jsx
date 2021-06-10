import React,{useState} from 'react';

const Form=(props)=> {
    const[color,setColor]=useState(""); 

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(color!==""){
            props.onAddColor(color) 
            setColor("")
        } 
    }

	return ( 
        <form className="colors-form" onSubmit={e=>handleSubmit(e)}>
            <input type="text" onChange={e=>setColor(e.target.value)} value={color}/>
            <button>Add Color</button>
            <input type="color" onChange={e=>setColor(e.target.value)} value={color}/>
        </form> 
    )
}

export default Form;
