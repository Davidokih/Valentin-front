import React from 'react'
import Header from './Landing/Header'
import Home from './Landing/Home'
import Pair from './Landing/Pair'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
       <Header/>
      
      
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/pairing/:id' element={<Pair/>}/>
      </Routes>
    </BrowserRouter>
   
    
  )
}

export default App