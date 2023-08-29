import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Main from './pages/main'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path='/' />
          <Route element={<Main />} path='/main' />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App