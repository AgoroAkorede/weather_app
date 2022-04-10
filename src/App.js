import React, { useEffect } from 'react';  
import './App.css';
import { Route, Routes, Navigate,useNavigate,useMatch } from 'react-router-dom'

import SearchPage from './pages/searchpage/searchpage'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/search' element={ <SearchPage /> } />
        <Route path='/' element={ <SearchPage /> } />
  
      </Routes>
       
    </div>
  )
}
export default App;
