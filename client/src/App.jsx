import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Form from "./components/Form/Form.jsx";
import Activities from './components/Activities/Activities';
// import Error from "./components/Error/Error.jsx";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname.includes("/home") && <NavBar />}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path="/createActivities" element={<Form/>}/>
        <Route path="/activities" element={<Activities/>}/>
      </Routes>
    </div>
  )
};

export default App
