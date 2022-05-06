import React from 'react';
import './publicLayout.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home/Home';

const PublicLayout = () => {
  return (
    <div className='publiclayout'>
       <Router>
           <Routes>
               <Route path='/' >
                   <Route index element={<Home/>}/>
               </Route>
           </Routes>
       </Router>
    </div>
  )
}

export default PublicLayout