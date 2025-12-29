import './App.css'
import PersonalInfo from './components/PersonalInfo'
import About from './components/About'
import Interests from './components/Interests'

function App() {

  return (
    <>
      <div className='card-container'>
        <PersonalInfo />
        <About />
        <Interests />
      </div>
    </>
  )
}

export default App
