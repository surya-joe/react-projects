import React,{ useState, useRef } from 'react'

export const StopWatch = () => {
    // https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
    const [timer, setTimer] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const tick = () => setTimer( ps => ps + 1 )
    const startTimer = () => {
        countRef.current = setInterval(tick, 1000)
    }

    const pauseTimer = () => {
        clearInterval(countRef.current)
    }

    const resetTimer = () => {
        setTimer(0)
    }

   console.log(isPaused)
  return (
    <div className='stopWatch'>
        <h2>Stop Watch</h2>
        <h1>{timer}</h1>
        <button onClick={ startTimer }> Start </button>
        <button onClick={ pauseTimer } > Pause/Resume </button>
        <button onClick={ resetTimer }> Reset </button>
    </div>
  )
}
