import React, { createContext, useState } from 'react'
import Nav from './Nav'
import Recharts from './Recharts'
import "./App.css"
import Recharts2 from './Recharts2'


export const CounterContext = createContext()

const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      <CounterContext.Provider value={{count1,setCount1,count2,setCount2}}>
        <div className='app-container'>
        <div>
        <Nav /> <hr />
        <Nav/>
        </div>
        <div>
        </div>
        <Recharts />
        </div>
        <Recharts2 />
      </CounterContext.Provider>
    </div>
  )
}

export default App
