import Counter from "./components/Counter"
import AnimatedBackground from "./threejs/AnimatedBackground"

import './fanta.css'
import './index.css'



function App() {
 

  return (
    <>
      <AnimatedBackground/>
      <div id="countComponent">
    <h1 className="text-gradient text-spacing font"><a href="https://github.com/thatGreatSloth/">thatGreatSloth</a> welcomes you to the Counter App</h1>
  

      <Counter/>
      </div>
    </>
  )
}

export default App
