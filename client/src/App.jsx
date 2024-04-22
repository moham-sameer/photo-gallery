import React from 'react'
import Form from './babaForm/form'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Fooled from './babaForm/Fooled'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/fooled' element={<Fooled/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
