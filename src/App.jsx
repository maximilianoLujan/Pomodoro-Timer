import NavBar from './components/Navbar/NavBar'
import Clock from './components/Clock/Clock'
import Todos from './components/Todos/Todos'
import Challenges from './components/Challenges/Challenges'
import WhatIsPomodore from "./components/WhatIs/WhatIsPomodore"
import WhoUse from './components/whouse/WhoUse'
import Cience from './components/Cience/Cience'
import Ask from './components/Ask/Ask'
import Music from './components/Music/Music'




function App() {
  return (
    <div id='boss' className='max-w-screen-2xl flex flex-col items-center'>
      <NavBar/>
      <main className='w-full p-7 mb-80'>
        <div className='flex flex-col lg:flex-row'>
          <Clock/>
          <Todos/>
        </div>
      </main>
      <Challenges />
      <WhatIsPomodore />
      <WhoUse />
      <Cience /> 
      <Ask />
      <Music />
    </div>
    
  )
}

export default App
