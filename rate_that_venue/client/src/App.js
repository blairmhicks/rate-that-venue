import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import VenueDetail from './components/VenueDetail';
import UpdateVenue from './components/UpdateVenue';
import VenueForm from './components/VenueForm';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<VenueDetail/>} path="/venues/:id" />
        <Route element={<UpdateVenue/>} path="/venues/edit/:id"/>
        <Route element={<VenueForm/>} path="/venues/add"/>   
        <Route element={<Test/>}  path="/test"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
