import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutPhoto from "./pages/AboutPhoto";
import './App.css';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about-photo' element={<AboutPhoto />}>
                    <Route path=':id' element={<AboutPhoto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
