import React from 'react'
import team1 from "../../assets/team-1.jpeg"
import team2 from "../../assets/team-2.jpeg"
import team3 from "../../assets/team-3.jpeg"
import team4 from "../../assets/team-4.jpeg"
import Image from "next/image";

import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";          
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function page() {
  return (
    <div>
      <section id="team" className="team section-bg">
      {/* <Headers/> */}
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-6 bg-img-side" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <Image src={team1} className="img-fluid" alt=""/>

                </div>
              <div className="member-info">
              <h4>BB Truck Zone</h4>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
            
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0 bg-img-side" data-aos="zoom-in" data-aos-delay="200">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <Image src={team2} className="img-fluid" alt=""/>

              </div>
              <div className="member-info">
              <h4>BB Truck Zone</h4>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 bg-img-side" data-aos="zoom-in" data-aos-delay="300">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <Image src={team3} className="img-fluid" alt=""/>

                </div>
              <div className="member-info">
              <h4>BB Truck Zone</h4>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 bg-img-side" data-aos="zoom-in" data-aos-delay="400">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <Image src={team4} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>BB Truck Zone</h4>
              
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <Pricing/> */}
    {/* <Footer/> */}
    </div>
  )
}

export default page
