import logo from './logo.svg';
import './App.css';
import React from "react";
import ListStudent from "./student/List";
import {Route, Routes, Link} from "react-router-dom";

import Navbar from "./component/navbar";
import Create from "./student/Create";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
            <Routes>
                <Route path="" element={<ListStudent/>} />
                <Route path="/students/create" element={<Create/>} />
            </Routes>
    </div>
  );
}

export default App;
