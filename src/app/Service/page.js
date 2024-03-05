import React from "react";
import Service1 from "../../assets/img/wp3022647.jpg";
import Service2 from "../../assets/img/service-1.jpeg";
import Service3 from "../../assets/img/service-2.jpeg";
import Service4 from "../../assets/img/service-3.jpeg";
import Service5 from "../../assets/img/service-4.jpeg";
import Footer from "../Footer/page"

import Image from "next/image";
// import Cta from "../Cta/page"
import { BiTachometer } from "react-icons/bi";
import { IoLayers } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import Headers from "../Headers/page"

function page() {
  return (
    <div>
  <section id="services" className="services section-bg">
  <Headers/>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
            Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services. At BB Truck Zone, we specialize in ensuring the reliability and optimal performance of your heavy-duty vehicles. From routine maintenance to intricate repairs, our dedicated team of skilled technicians is committed to keeping your trucks and trailers in peak condition.
            </p>
          </div>

          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box ">
                <div className="icon">
                <Image src={Service2} className="img-fluid animated service-img main-truck" alt="" />
                </div>
              
                <p className="p-justify">
                         Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                <Image src={Service3} className="img-fluid animated service-img main-truck" alt="" />
                </div>
              
                <p className="p-justify">
                         Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                <Image src={Service4} className="img-fluid animated service-img main-truck" alt="" />
                </div>
                <p className="p-justify">
                         Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                <Image src={Service5} className="img-fluid animated service-img main-truck" alt="" />
                </div>
              
                <p className="p-justify">
                         Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
     
        <div className="container" data-aos="fade-up">
          <div className="row">
         
            <div
              className="col-lg-6 pt-4 pt-lg-0 content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates
              </h3>
              <p className="p-justify mt-3">Preventative maintenance is a cornerstone of our approach. We understand the challenges that long-haul journeys pose to your equipment, and our tailored preventative maintenance programs are designed to extend the lifespan of your vehicles while minimizing the risk of unexpected breakdowns. Regular inspections and proactive measures ensure that your fleet remains compliant with safety regulations, giving you confidence on the road.</p>
<p className="p-justify">What sets BB Truck Zone apart is our unwavering commitment to customer satisfaction. We prioritize clear communication, transparency, and responsiveness to your maintenance needs. Our goal is to minimize downtime, providing timely updates on the status of your repairs and ensuring that your trucks and trailers are back on the road as quickly as possible.</p>

            
            </div>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image src={Service1} className="img-fluid animation-img  main-truck" alt="" />
            </div>
          </div>
        </div>
      </section>

    
      {/* <Cta/> */}
      <Footer/>

    </div>
  );
}

export default page;
