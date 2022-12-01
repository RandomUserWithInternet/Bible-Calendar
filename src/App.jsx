import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Day />
    </div>
  )
}


function Day(){
  return (
    <center>
      <div className="border-4 box-border border-black h-24 w-32">day #</div>
    </center>
  )
}
export default App
