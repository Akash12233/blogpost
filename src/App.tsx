
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/landing'
import Allblogs from './components/allblogs';
import Blogform from './components/blogform';
const app: React.FC = () => {


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/allblogs" element={<Allblogs/>}/>
          <Route path="/blogform" element={<Blogform/>}/>
      </Routes>
    </Router>
  )
}

export default app
