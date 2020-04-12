import React from "react";
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap'
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import {Animated} from "react-animated-css";


const Header=()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/decorations">Decorations</Nav.Link>
                <Nav.Link href="/rooms">My Rooms</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/forum">Feedback</Nav.Link>
            </Nav>
        </Navbar>
       )
};
export default Header;