import React from 'react'
import Footer from "../Footer/page"
import { IoLocation } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import Headers from "../Headers/page"
function page() {
  return (
    <div>
     <section id="contact" className="contact ">
     <Headers/>
      <div className="container mt-5" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p> Welcome to BB Truck Zone, your trusted partner in comprehensive truck and trailer maintenance services. At BB Truck Zone, we specialize in ensuring the reliability and optimal performance of your heavy-duty vehicles. From routine maintenance to intricate repairs, our dedicated team of skilled technicians is committed to keeping your trucks and trailers in peak condition..</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="phone">
             
                <h4>   <IoLocation className="bi bi-envelope"/>Location:</h4>
                <p>
       
        Calgary
        
        </p>
              </div>

              <div className="phone">
              
                <h4>   <MdOutlineMailOutline className="bi bi-envelope"/>Email:</h4>
                <p>info@bbtruckzone.com</p>
              </div>

              <div className="phone">
                
                <h4><IoIosPhonePortrait className="bi bi-envelope"/>Call:</h4>
                <p>+1(437)981-0767</p>
              </div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.7123692633!2d-114.417485241293!3d51.02759153831241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1709898347527!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.7123692633!2d-114.417485241293!3d51.02759153831241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1709898347527!5m2!1sen!2sin"  frameborder="0" style={{border:"0 ", width: "100%" , height: "290px"}} allowfullscreen></iframe>
            </div>

          </div>

          <div className="mt-5 col-lg-7 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <Footer/> */}
    <Footer/>
    </div>
  )
}

export default page
