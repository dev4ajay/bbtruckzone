import React from "react";
import Headers from "../Headers/page";
import Footer from "../Footer/page";
import Client1 from "../../assets/repair-1.jpg";
import Image from "next/image";
function page() {
  return (
    <>
      <div>
        <Headers />
        <div>
          <div className="px-5   py-5 text-justify mt-5  mb-2">
            <div className="py-2">
              <h3 className="font-bold text-2xl mt-5 ">
                Commercial Truck Tires
              </h3>
              <p>
                Improper inflation and road hazards lead to flat tires and blow
                outs — costly occurrences when a truck is in the middle of a
                delivery. Not only will a fleet lose money during downtime,
                they’ll also be tasked with calling tire repair shops to get the
                issue fixed.
              </p>
              <p className="mt-3">
                Avoid this chaos, and get back on the road fast with truck tire
                road service from BB Truck Zone®.
              </p>
              <Image
                src={Client1}
                className="img-fluid emergency-img mt-4 mb-2 bg-img-side repair-truck"
                alt=""
              />
            </div>

            <div className="py-2">
              <h3 className="font-bold text-2xl">
                BB Truck Zone Tire Road Service
              </h3>
              <p className="text-justify">
                Our service center is staffed 24/7/365 so we’re always available
                to assist with your truck tire repair needs. Simply give us a
                call through our toll-free number or register your breakdown via
                our secure online form. By participating in our service, you’ll
                receive:
              </p>
              <p className="text-justify">
                <b> Semi tire repair with minimal downtime.</b> Our service
                providers can handle everything from flat-tire repair to
                complete replacement. When you call, we will contact independent
                contractors, OEMs and dealers in the area that specialize in
                heavy truck tires and dispatch someone to your location. We will
                stay in contact with you throughout the repair process and make
                sure the service provider is meeting your needs — our goal is to
                get you back on the road as quickly as possible.
              </p>
              <p className="text-justify mt-2">
                <b>Access to commercial tires</b>. Because we aren’t tied to one
                brand of tire, and our priority is to minimize downtime, we
                provide options when your preferred brand of tire won’t get to
                the repair site quickly. This allows you to choose between brand
                and uptime — a choice our customers appreciate. We can use your
                national tire accounts or the national tire accounts we have in
                place with major OEM providers. By using our accounts, we can
                help manage your costs and provide valuable reporting.
              </p>
              <p className="text-justify mt-2">
                {" "}
                <b>Service beyond truck tires.</b> If you’re experiencing a
                breakdown due to more than tire problems, we will send a service
                provider capable of resolving all issues with your heavy duty
                vehicle. Utilizing a single service provider for all repairs
                helps you save time and money.
              </p>
            </div>
          </div>

          <div className="container py-2">
            <h3 className="font-bold text-2xl">
              Never Be Without a Tire Repair Shop{" "}
            </h3>
            <p className="text-justify">
              Don’t let tire issues keep you off the road — call BB Truck Zone
              for fast, reliable truck tire repair service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
