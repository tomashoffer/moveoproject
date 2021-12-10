import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListOfUsers from './components/ListOfUsers'
import UserDetails from './components/UserDetails'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar'



export default function App() {
  return (
    <div> 
        <Router>
          <CssBaseline />
            <Container fixed>
              <NavBar/>
            <Routes>
              <Route exact path="/" element={<ListOfUsers />} />
              <Route exact path="/:username" element={<UserDetails />} />
          </Routes>
         </Container>
        </Router>
    </div>
  );
}
