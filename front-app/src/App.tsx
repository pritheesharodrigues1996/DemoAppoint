// import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Doctor } from './components/Doctor';
import { Admin } from './components/Admin';
import { Patient } from './components/Patient';
import { Registration } from './components/Registration';

function App() {
   return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/patient" element={<Patient />} />
      
      </Routes>
      </BrowserRouter>
  
  
    </div>
   );
}

export default App;