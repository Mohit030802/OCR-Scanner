import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import GenerateLink from './components/generateLink'



function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/generateLink' element={<GenerateLink/>}></Route>

    </Routes>
    </>
  )
}

export default App
