import React, { useState } from "react";
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom'
import { Home } from "./Home";
import { Confirmation } from "./Confirmation";
function App(){
    return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/confirmation" element={<Confirmation/>}/>
  </Routes>
    
}
export default App;