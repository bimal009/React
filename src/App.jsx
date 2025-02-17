import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import { Signup} from "./components/Signup";
import { Login } from "./components/login";

function App() {
  return (
  
    <div>
      <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
