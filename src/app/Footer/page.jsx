import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function page() {
  return (
    <div>
      <footer id="footer">
<div className="mt-3 text-white footer-newsletter ">
  <div className="container">
    <div className="row justify-content-center">
      <div className=" col-lg-6">
        <h3 className="font-bold fs-3">GET IN TOUCH</h3>
        <p className="mt-3 font-bold get-join">
        WE WOULD LOVE TO HEAR FROM YOU MOREOVER, WE ARE HERE TO HELP OUR CUSTOMERS AND KEEP YOU ON THE ROAD!</p>
      
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>BB TRUCK ZONE</h3>
        <p>
      
        Calgary<br/>
       
          <strong>Phone:</strong> +1(437)981-0767<br/>
          <strong>Email:</strong>  info@bbtruckzone.com<br/>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#" className='text-decoration-none'>Home</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="/About"  className='text-decoration-none'>About us</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Services</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="/Contact"  className='text-decoration-none'>Contact</a></li>

        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="/Common"  className='text-decoration-none'>Emergency Roadside Assistance</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="/Costdata"  className='text-decoration-none'>Cost Reduction Data</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="/FleetMaintance"  className='text-decoration-none'>Fleet Maintenance</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="/TireRepair"  className='text-decoration-none'>Tire Repair</a></li>

        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p className='text-justify'>Join our exclusive social network for the latest in fleet maintenance strategies</p>
        <div className="mt-3 social-links">
          <a href="#" className="twitter"><FaTwitter className="bx bxl-twitter"/></a>
          <a href="#" className="facebook"><FaFacebookSquare className="bx bxl-facebook"/></a>
          <a href="#" className="instagram"><FaInstagram className="bx bxl-instagram"/></a>
         
          <a href="#" className="linkedin"><FaLinkedin className="bx bxl-linkedin"/></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container clearfix footer-bottom">
  <div className="copyright">
    &copy; Copyright <strong><span>BB TRUCK ZONE</span></strong>. All Rights Reserved
  </div>
 
</div>
</footer>

</div>
  )
}

export default page
