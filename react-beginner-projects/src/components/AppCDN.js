import React from "react"
import { ReactDOM } from "react"

function App(){
    return(
        <div className='App'>
            <h1>hello world</h1>
            {/* <CounterApp />
            <TitleCount />
            <TimerCounter /> */}
        </div>
    )
}

export default App

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)