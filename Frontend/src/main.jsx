import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Userlogin from './userlogin.jsx';
import Userregetser from './userregester.jsx';
import Homepage from './homepage.jsx'
import AddProperty from './AddProperty.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/userlogin" element={<Userlogin />} /> 
        <Route path="/userregester" element={<Userregetser />} />
        <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/homepage" element={<Homepage />} />

      </Routes>
    </Router>
)
