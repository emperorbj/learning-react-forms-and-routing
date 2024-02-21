import { useState , createContext} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Components/About'
import Gadgets from './Components/Gadgets'
import Services from './Components/Services'
import Header from './Components/Header'

export const  TheContext = createContext()

function App() {
  const [name,setName] = useState('CEO Bolaji')
  return (
    <>
    <TheContext.Provider value={name}>
            {/* <BrowserRouter>

        <Header/>
        <Routes>

        <Route path='/about' element={<About/>}/>
        <Route path='/gadgets' element={<Gadgets/>}/>
        <Route path='/services' element={<Services/>}/>

        </Routes>

        </BrowserRouter> */}
        <About/>
    </TheContext.Provider>
    </>
  )
}
