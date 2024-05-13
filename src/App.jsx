import React from 'react';
import CompA from './Components/UseRef/CompA';
import UseReducerHook from './Components/UseReducer.jsx/UseReducerHook';

const App = () => {
    return (
        <div>
            <h1>hello world</h1>
            <CompA />
            <UseReducerHook />
        </div>
    );
};

export default App;