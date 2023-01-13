import NavBar from './components/Navbar/NavBar'
import { useSelector } from 'react-redux'

function App() {
  const value = useSelector(state => state.config.value)

  console.log("hola")

  return (
    <main>
      <NavBar/>
      <div>
        <h1>{value.focus}</h1>
        <h1>{value.recreo}</h1>
        <h1>{value.breakLong}</h1>
      </div>
    </main>
  )
}

export default App
