import React from 'react'
import About from "../About/page"
import Image from "next/image";

import Client1 from "../../assets/clients/client-1.png";
import Client2 from "../../assets/clients/client-2.png";
import Client3 from "../../assets/clients/client-3.png";
import Client4 from "../../assets/clients/client-4.png";
import Client5 from "../../assets/clients/client-5.png";
import Client6 from "../../assets/clients/client-6.png";
import ImgTruck from "../../assets/all-truck.jpg"
import Team from "../Team/page"
import Cta from "../Cta/page" 

     import Pricing from "../Pricing/page"
    


function page() {
  return (
    <div>
        <section id="clients" className="clients section-bg mt-4 mb-2">
      <div className="container">

        <div className="row" data-aos="zoom-in">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client1} className="img-fluid bg-img-side" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client2} className="img-fluid bg-img-side" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client3} className="img-fluid bg-img-side" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client4} className="img-fluid bg-img-side" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <Image src={Client5} className="img-fluid bg-img-side" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <Image src={Client6} className="img-fluid bg-img-side" alt=""/>
          </div>

        </div>

      </div>
    </section>
    <div className="container" data-aos="fade-up">

<div className="section-title mt-4 mb-2">
  <h2>About Us</h2>
</div>

<div className="row content">
  <div className="col-lg-6 mt-3 mb-2 ">
<p className="p-justify">
    Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services. At BB Truck Zone, we specialize in ensuring the reliability and optimal performance of your heavy-duty vehicles. From routine maintenance to intricate repairs, our dedicated team of skilled technicians is committed to keeping your trucks and trailers in peak condition.
    </p>
    <p className="p-justify">Our services encompass a wide range of maintenance needs, including engine diagnostics, transmission repairs, brake system overhauls, and trailer maintenance. With a focus on efficiency and precision, we utilize advanced diagnostic tools and cutting-edge technology to quickly identify and address any issues your fleet may encounter. Whether you operate a single truck or manage a large-scale logistics operation, BB Truck Zone is equipped to meet the unique demands of the transportation industry.</p>

   
 
    <a href="#" className="btn-learn-more text-decoration-none">Learn More</a>
  </div>
  <div className="col-lg-6">
  <Image src={ImgTruck} className="img-fluid main-truck mt-3 mb-2 bg-img-side"  alt=""/>
  </div>
</div>

</div>
    <Team/>
<Cta/>
<Pricing/>
    </div>

  )
}

export default page
