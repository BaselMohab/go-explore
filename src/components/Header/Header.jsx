import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navdata from './navData';


const Header = () => {


return (
    <section className="navbar" id="home">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                <Navbar.Brand className="navbar-logo" href="#home"><span>go</span>Explore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto">
                        {navdata.map((list) => {
                        const { id, name, href } = list;
                        return (
                            <Nav.Link class="nav-link"
                            key={id} 
                            href={href}
                            >
                            {name}
                            </Nav.Link>
                        );
                        })}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
)
}

export default Header;
