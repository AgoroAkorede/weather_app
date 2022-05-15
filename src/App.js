import React, { useEffect } from 'react';  
import './App.css';
import { Route, Routes, Navigate,useNavigate,useMatch } from 'react-router-dom'

import SearchPage from './pages/searchpage/searchpage'
import ErrorPage from './pages/errorpage/error'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/search' element={ <SearchPage /> } />
        <Route path='/' element={ <SearchPage /> } />
        <Route path='/404' element={ <ErrorPage /> } />
        <Route path='*' element={ <ErrorPage /> } />
  
      </Routes>
       
    </div>
  )
}
export default App;
