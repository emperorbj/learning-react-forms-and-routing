import React, { useState } from 'react'

const Form = () => {

//    let[name,setName]=useState('')
//    function handleChange(e){
//        setName(e.target.value)
//    }

let[details,setDetails]=useState({})

function handleInputs(e){
    setDetails((prevObj)=>{

// PASSING VARIABLE name = 'name' or name = 'email' as a property we use[e.target.name]
        return{...prevObj,[e.target.name]:e.target.value}
    })
    
}

function handleSubmit(){
    console.log(details)
}

//CREATING ONLY ONE STATE VARIABLES THAT CAN HANDLE MULTIPLE FIELDS  AT THE SAME TIME
    return (
        <div>
            {/* <h1>{name}</h1> */}
            {/* <input type="text" onChange={handleChange} placeholder='name here' value={name}/> */}

{/* INPUT FIELDS FOR SETDETAILS */}
            
            <input type="email" name="email" onChange={handleInputs}  placeholder='enter email here' id="" />
            <input type="text" name="name"   onChange={handleInputs} placeholder="please name here" id="" />
            <button type="button" onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Form
