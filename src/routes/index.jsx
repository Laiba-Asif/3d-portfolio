import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Services from '../Pages/Services';

const MyRoutes = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/articles" element={<Home />} /> */}
      </Routes>
    </Router>
  )
}

export default MyRoutes
