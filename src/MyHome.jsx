import React, { useRef, useState } from 'react'

export default function MyHome() {

    console.log("D");

  const input =  useRef(0);

  const [input1,setinput]= useState(''); 
  const handleButton= ()=>{

    console.log(input.current.value);

  }

  const handleInput= (e)=>{
    setinput(e.target.value);
  }
  return (
    <div>
        
        <input type='text' ref={input}/>

        <input type='text'value={input1} onChange={handleInput}/>

        <input type='button' onClick={handleButton} />
    </div>
  )
}
