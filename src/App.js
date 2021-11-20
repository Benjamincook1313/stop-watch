import React, { useState, useEffect } from 'react'
import './App.css';
import { Clock, Num } from './Styles/Styles'
import { Button } from 'react-bootstrap'

function App() {

  const [start, setStart] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval = null;

    if(start){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [start])

  return (
    <div className='App'>
      <h1>Stop Watch</h1>
      <Clock>
        <Num>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</Num>
        <Num>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</Num>
        <Num>{('0' + (time / 10) % 100).slice(-2)}</Num>
      </Clock>
      {!start && time === 0 &&
        <Button onClick={() => setStart(true)} variant='dark'>Start</Button>
      }
      {start && 
        <Button onClick={() => setStart(false)} variant='dark'>Stop</Button>
      }
      {!start && time !== 0 &&
        <div>
          <Button onClick={() => setStart(true)} variant='dark'>Resume</Button>
          <Button onClick={() => setTime(0)} variant='dark'>Reset</Button>
        </div>
      }
    </div>
  );
}

export default App;
