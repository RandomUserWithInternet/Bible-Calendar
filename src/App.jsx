import { useState } from 'react'
import './App.css'

function App() {
  
  const dayOf = {
    month: '1',
    week: 'Monday',
};

  return (
    <div>
      <div className="App">
        <Day dayOf={dayOf} />
      </div>
    </div>
  )
}

const Day = (props) => {
  const dayOf = props.dayOf;

  return (
    <center>
      <div className="border-4 box-border border-black h-24 w-32">
        <h1>{dayOf.month}</h1>
      </div>
    </center>
  );
}
export default App
