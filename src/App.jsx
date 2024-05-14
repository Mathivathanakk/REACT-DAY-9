import React from 'react';
import CompA from './Components/UseRef/CompA';
import UseReducerHook from './Components/UseReducer.jsx/UseReducerHook';

const App = () => {
    return (
        <div>
            <h1 className='text-center'> USEREDUCER HOOK</h1>
            {/* <CompA /> */}
            <UseReducerHook />
        </div>
    );
};

export default App;