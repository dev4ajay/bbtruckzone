"use client"
import React from "react";
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import LogoImg from "../../assets/Group123.png" ;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Dropdown } from 'react-bootstrap';
import { Nav as BootstrapNav } from 'react-bootstrap';

function page() {
  return (
    <div>
        
        <Navbar expand="lg"  id="header" className="fixed-top header-scrolled">
      <Container >
        
        <span>
        <Navbar.Brand href="/#" className="main-color "  ><Image src={LogoImg}  href="/#" className="logo-name" alt="logo-image" /></Navbar.Brand>
        </span>
        <Navbar.Toggle  className="toggle-btn " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 ms-auto my-lg-0"
            // style={{ maxHeight: '100px' ,}}
            navbarScroll
          >
            <Nav.Link href="/#"  >Home</Nav.Link>
            <Nav.Link href="/About"  >About</Nav.Link>        
            <Dropdown>
  <Dropdown.Toggle  id="dropdown-services" classname="px-4 py-5 services-dark text-dark">
    Services
  </Dropdown.Toggle>

  <Dropdown.Menu>
        <Dropdown.Item href="/Common" className="main-colors">Emergency Roadside Assistance</Dropdown.Item>
        <Dropdown.Item href="/Costdata" className="main-colors">Cost Reduction Data</Dropdown.Item>
        <Dropdown.Item href="/FleetMaintance" className="main-colors">Fleet Maintenance</Dropdown.Item>
        <Dropdown.Item href="/TireRepair" className="main-colors">Tire Repair</Dropdown.Item>
      </Dropdown.Menu>
</Dropdown>

    
         
            <Nav.Link href="/Contact"    >    Contact</Nav.Link>
            <Nav.Link href="/"  className=" getstarted" >    Get Started</Nav.Link>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default page
