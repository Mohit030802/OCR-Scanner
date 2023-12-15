import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import GenerateLink from './components/generateLink'
import Bye from './components/Bye'



function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/generateLink' element={<GenerateLink/>}></Route>
      <Route path='/about' element={<Home/>}></Route>
      <Route path='/contact' element={<Home/>}></Route>
      <Route path='/ik' element={<Bye/>}></Route>

    </Routes>
    </>
  )
}

export default App
