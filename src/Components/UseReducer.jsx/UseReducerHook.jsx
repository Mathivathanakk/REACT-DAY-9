import React, { useReducer } from 'react';
import ReducerHook from './ReducerHook';


const UseReducerHook = () => {
    const[state,dispatch]=useReducer(ReducerHook,1)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch({type:"ADD",payload:2})}}>ADD+2</button>
            <button  onClick={()=>{dispatch({type:"SUB",payload:1})}}>SUB-1</button>
        </div>
    );
};

export default UseReducerHook;

