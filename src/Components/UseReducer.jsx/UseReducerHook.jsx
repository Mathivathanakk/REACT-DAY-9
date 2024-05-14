import React, { useReducer } from 'react';
import ReducerHook from './ReducerHook';



const UseReducerHook = () => {
    const[state,dispatch]=useReducer(ReducerHook ,0)
    return (
        <div>
            <h1 className='text-center m-5'>COUNTER</h1>
           <h1 className='text-center m-2' > <span style={{backgroundColor:"purple",color:"white",padding:"5px"}}>{state}</span></h1>
           <div className='text-center'>
           <button className='btn btn-danger m-2 px-5 '  onClick={()=>{dispatch({type:"ADD",payload:1})}}>ADD</button><br />
           <button className='btn btn-warning m-2 px-5' onClick={()=>{dispatch({type:"SUB",payload:1})}}>SUB</button><br />
           <button className='btn btn-success m-2 px-5' onClick={()=>{dispatch({type:"MULTI",payload:2})}}>MULTI*2</button><br />
           <button className='btn btn-info m-2 px-5' onClick={()=>{dispatch({type:"DIV",payload:2})}}>DIV/2</button><br />
           <button className='btn btn-dark m-2 px-5' onClick={()=>{dispatch({type:"RESET",payload:0})}}>RESET</button><br />
        </div>
        </div>
    );
};

export default UseReducerHook;

