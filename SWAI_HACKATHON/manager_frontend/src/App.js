import React, { Component } from "react";
import './App.css';
import './sb-admin-2.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTable from './pages/UserTable';
import TimerTable from './pages/TimerTable';
import ReportTable from './pages/ReportTable';
import LogTable from './pages/LogTable';
import Home from './pages/Home';
import ContactTable from './pages/ContactTable';
import styled from "styled-components";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/users" element={<UserTable />}></Route>
        <Route path="/timers" element={<TimerTable />}></Route>
        <Route path="/reports" element={<ReportTable />}></Route>
        <Route path="/logs" element={<LogTable />}></Route>
        <Route path="/contacts" element={<ContactTable />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
