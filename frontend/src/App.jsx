import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route>{/* User Layout */}  </Route>
          <Route>{/* Admin Layout */}  </Route>


        </Routes>
    </BrowserRouter>
  )
}

export default App