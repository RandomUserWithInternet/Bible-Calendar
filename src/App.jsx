import './App.css'
import Calendar from "./Calendar.jsx"
import { signInWithGoogle } from "./Firebase"
function App() {
  
  return (
    <>
      <button onClick={signInWithGoogle}> hi</button>
      <Calendar />
    </>
  )
}

export default App
