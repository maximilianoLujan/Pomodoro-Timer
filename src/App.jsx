import NavBar from './components/Navbar/NavBar'
import Clock from './components/Clock/Clock'
import Todos from './components/Todos/Todos'
import Challenges from './components/Challenges/Challenges'

function App() {
  return (
    <div className='max-w-screen-2xl flex flex-col items-center'>
      <NavBar/>
      <main className='w-full p-7'>
        <div className='flex flex-col lg:flex-row'>
          <Clock/>
          <Todos/>
        </div>
      </main>
      <Challenges />
    </div>
    
  )
}

export default App
