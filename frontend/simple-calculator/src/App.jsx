import React, { useState } from 'react';

function App() {
    let [count, setCount]=useState(0);

   function incrementIt() {
    setCount(count + 1);
   }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <h1>Simple Calculator - Santhosh</h1>
            <h2>{count}</h2>
            <button onClick={incrementIt}>Click</button>
          </div>
          
    )
} 

export default App;