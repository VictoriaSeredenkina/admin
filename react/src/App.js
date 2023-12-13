import React from 'react';
import './Styles/App.css';
import {Routes, Route} from "react-router-dom";
import FilmCard from './pages/FilmCard';
import Home from './pages/Home';
import StartPage from './pages/StartPage';


function App() {
  return(
     <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/*" element={<FilmCard />} />
      <Route path="/home" element={<Home />} />
     </Routes>   
  )
}

export default App;
