import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

const NavBar = () => {
    return ( 
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
       <Link to="/" style={{ color: "#fff" }}>Home</Link>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://media-exp1.licdn.com/dms/image/C510BAQH7KizrKXNyKg/company-logo_200_200/0/1519899821288?e=2159024400&v=beta&t=Rnn-kLt_iN5yRj4bu6-cCQsWhcjCJs9WvsfR1OXNBBo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Moveo 
      </Navbar.Brand>
   
    </Container>
  </Navbar>
</>
     );
}
 
export default NavBar
