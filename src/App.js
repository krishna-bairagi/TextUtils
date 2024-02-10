import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import Aboutus from './components/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1900);
  }

  const [mode, setMode] = useState('light');

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/1414981473/photo/futuristic-flight-through-a-digital-line-landscape-blue-dust-particle-abstract-background-3d.webp?b=1&s=170667a&w=0&k=20&c=nR3IdRbSFibEagWhoCRY_d-WyEJJSv0BLcIsmJJYN5M=)";
      showalert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg)";
      showalert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title='Text-Utils' mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<Aboutus />} />
            <Route path="/" element={<Form showalert={showalert} heading="Text Formatter" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

