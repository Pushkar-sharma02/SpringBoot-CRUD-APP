import React from 'react';
import './App.css';
import Home from './pages/Home'
import Navbar from'./layout/Navbar';
import AddUser from './Users/AddUsers'
import EditUser from './Users/EditUser'
import ViewUser from './Users/ViewUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path ="/edituser/:id" element={<EditUser />}/>
            <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
