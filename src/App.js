import React, { useState } from 'react'
import './App.css';

function App() {

  const [hour, setHour] = useState(0)
  const [min, setmin] = useState(0)
  const [sec, setSec] = useState(0)
  const [start, setStart] = useState(false)

  const stopClock = () => {
    
  };


  return (
    <div className="App">
      <h1>{hour + ':' + min + sec}</h1>
      {start?
        <button onClick={stopClock}>Stop</button>:
        <button>Start</button>
      }
      <button>Reset</button>
    </div>
  );
}

export default App;
