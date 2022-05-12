import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Main from './views/Main';
import VenueDetail from './components/VenueDetail';
import './App.css';
import UpdateVenue from './components/UpdateVenue';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<VenueDetail/>} path="/venues/:id" />
        <Route element={<UpdateVenue/>} path="/venues/edit/:id"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
