
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/landing'
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
const app: React.FC = () => {


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default app
