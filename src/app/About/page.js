import React from "react";
import ImgTruck from "../../assets/all-truck.jpg"
import Image from "next/image";
import Headers from "../Headers/page";
import Footer from "../Footer/page";
function About() {
  return  <div>

    <section id="about" className="about ">
<Headers/>
      <div className="container mt-5 " data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
        <p className="p-justify">
            Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services. At BB Truck Zone, we specialize in ensuring the reliability and optimal performance of your heavy-duty vehicles. From routine maintenance to intricate repairs, our dedicated team of skilled technicians is committed to keeping your trucks and trailers in peak condition.
            </p>
            <p className="p-justify">Our services encompass a wide range of maintenance needs, including engine diagnostics, transmission repairs, brake system overhauls, and trailer maintenance. With a focus on efficiency and precision, we utilize advanced diagnostic tools and cutting-edge technology to quickly identify and address any issues your fleet may encounter. Whether you operate a single truck or manage a large-scale logistics operation, BB Truck Zone is equipped to meet the unique demands of the transportation industry.</p>
          <div className="col-lg-6 mt-3 mb-2 ">
       
           
           <p className="p-justify">Preventative maintenance is a cornerstone of our approach. We understand the challenges that long-haul journeys pose to your equipment, and our tailored preventative maintenance programs are designed to extend the lifespan of your vehicles while minimizing the risk of unexpected breakdowns. Regular inspections and proactive measures ensure that your fleet remains compliant with safety regulations, giving you confidence on the road.</p>
<p className="p-justify">What sets BB Truck Zone apart is our unwavering commitment to customer satisfaction. We prioritize clear communication, transparency, and responsiveness to your maintenance needs. Our goal is to minimize downtime, providing timely updates on the status of your repairs and ensuring that your trucks and trailers are back on the road as quickly as possible.</p>
        <p className="p-justify">As a reliable partner in the trucking industry, BB Truck Zone takes pride in our reputation for excellence. Whether you require urgent repairs or routine maintenance, our experienced team is here to deliver top-notch service. Trust BB Truck Zone for all your truck and trailer maintenance needs – where expertise meets reliability on the road.</p>
            <a href="#" className="btn-learn-more text-decoration-none">Learn More</a>
          </div>
          <div className="col-lg-6">
          <Image src={ImgTruck} className="img-fluid main-truck mt-3 mb-2 bg-img-side" alt="" />

          </div>
        </div>

      </div>
    </section>
    
 
    <Footer/>

  </div>;
}

export default About;
