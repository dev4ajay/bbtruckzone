"use client"
import React from "react";
import Img from "../../assets/red-truck.png";
import Image from "next/image";
import Clients from "../Clients/page"
import { FaAngleDown } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Dropdown } from 'react-bootstrap';
import { Nav as BootstrapNav } from 'react-bootstrap';
import Headers from "../Headers/page"
function page() {
  return (
    <>
      {/* <header id="header" className="fixed-top header-scrolled  ">
      
      </header> */}
       <Headers/>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center mt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 >Keep your fleet on the road with our top notch maintenance services reliability you can trust.</h1>
            
              {/* <div className="d-flex  ">
                <Link href="/" className="btn-get-started scrollto text-decoration-none">
                  Get Started
                </Link>
              <Link
                  href="https://www.youtube.com/"
                  className="glightbox btn-watch-video text-decoration-none"
                >
                <SiYoutubemusic   className=" main-watch" />
                  <span >Watch Video</span>
                </Link>
              </div> */}
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image src={Img} className="img-fluid animated bg-home" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Clients/>
    
    </>
  );
}

export default page;
