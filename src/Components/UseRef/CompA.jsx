import React, { useEffect, useRef, useState } from 'react';

const CompA = () => {
    const[data,setData]=useState('')
const myref=useRef();
const mineref=useRef()
useEffect(()=>{
    myref.current.focus()
},[])

const handleSubmit=()=>{
    console.log(myref.current.value)
    mineref.current=myref.current.value
    setData(data=>data+1)
}
    return (
        <div>
            <h1>using useref hook</h1>
            <input type="text" placeholder="enter the name" ref={myref}/>
            <button onClick={handleSubmit}>click</button>
            {mineref.current}
        </div>
    );
};

export default CompA;