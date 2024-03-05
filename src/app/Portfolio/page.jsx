import React from 'react'
import Image from "next/image";
import portfolio1 from "../../assets/img/portfolio/portfolio-1.jpg"
import portfolio2 from "../../assets/img/portfolio/portfolio-2.jpg"
import portfolio3 from "../../assets/img/portfolio/portfolio-3.jpg"
import portfolio4 from "../../assets/img/portfolio/portfolio-4.jpg"
import portfolio5 from "../../assets/img/portfolio/portfolio-5.jpg"
import portfolio6 from "../../assets/img/portfolio/portfolio-6.jpg"
import portfolio7 from "../../assets/img/portfolio/portfolio-7.jpg"
import portfolio8 from "../../assets/img/portfolio/portfolio-8.jpg"
import portfolio9 from "../../assets/img/portfolio/portfolio-9.jpg"
// import Team from "../Team/page"
import { FaCirclePlus } from "react-icons/fa6";
import { IoLinkOutline } from "react-icons/io5";



function page() {
  return (
    <div>
      {/* <section id="portfolio" className="portfolio"> */}
      {/* <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
            <Image src={portfolio1} className="img-fluid animation-img" alt=""/>                    
                </div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
            <Image src={portfolio2}  className="img-fluid animation-img" alt=""/>                    
                </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
            <Image src={portfolio3}  className="img-fluid animation-img" alt=""/>                    
                </div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
            <Image src={portfolio4}  className="img-fluid animation-img" alt=""/>

                </div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
            <Image src={portfolio5}  className="img-fluid animation-img" alt=""/>                    
                </div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
            <Image src={portfolio6}  className="img-fluid animation-img" alt=""/>

                </div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
            <Image src={portfolio7}  className="img-fluid animation-img" alt=""/>

                </div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
            <Image src={portfolio8}  className="img-fluid animation-img" alt=""/>

                </div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
                <Image src={portfolio9}  className="img-fluid animation-img" alt=""/>
                </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3">< FaCirclePlus className="bx bx-plus"/></a>
              <a href="portfolio-details.html" className="details-link" title="More Details">< IoLinkOutline className="bx bx-link"/></a>
            </div>
          </div>

        </div>

      </div> */}
    {/* </section> */}
    {/* <Team/> */}
    </div>
  )
}

export default page
