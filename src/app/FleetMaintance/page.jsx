import React from "react";
import Headers from "../Headers/page";
import Footer from "../Footer/page";
import Image from 'next/image'
import Client1 from "../../assets/mainentace.jpeg";
function page() {
  return (
    <>
      <div>
        <Headers />
        <div className="container">
          <div className="container px-5 py-5 mt-5 mb-2 text-justify">
            <div className="py-2">
              <h3 className="mt-5 text-2xl font-bold ">Fleet Maintenance</h3>
              <p>
                BB Truck Zone® utilizes experienced and dedicated staff to
                manage the fleet maintenance process so you can focus on your
                core business. We specialize in helping customers keep their
                equipment on the road, and our knowledgeable staff is available
                24/7 to answer your call. Whether your equipment requires
                scheduled or unscheduled service, we have the fleet management
                tools you need to achieve high preventive maintenance compliance
                at the lowest total maintenance cost.
              </p>
              <Image
                src={Client1}
                className="mt-4 mb-2 img-fluid emergency-img bg-img-side"
                alt=""
              />
            </div>

            <div className="container py-2">
              <h3 className="text-2xl font-bold">Maintenance Process</h3>
              <p className="text-justify">
                Our TMcare® program provides all elements of fleet equipment
                maintenance from scheduling the work to paying the final
                invoice. Our in-house software and dedicated staff members
                manage the entire process including third-party service
                providers, OSHA rules and regulations, and company compliance.
              </p>
            </div>
            <div className="container py-2">
            <h3 className="text-2xl font-bold">Mechanical</h3>
            <p className="text-justify">
              Your account representative will manage each maintenance event
              from start to finish. You’ll receive preventive maintenance forms,
              DOT/FHWA inspection documents and actual copies of service
              provider invoices in electronic equipment files, and we will audit
              invoices to ensure the charges are accurate. Our experience
              indicates most customers realize a mechanical savings of 12-17
              percent due to our fleet management process.
            </p>
          </div>
          <div className="container py-2">
            <h3 className="text-2xl font-bold">Back office</h3>

            <p className="text-justify">
              BB Truck Zone fleet maintenance services are designed to drive
              efficiency and can result in a significant savings in
              administrative costs — helping you gain a competitive advantage.
              For example, by using our consolidated billing option, one
              FleetNet customer reduced their invoices from over 20,000 to just
              52.
            </p>
          </div>
          <div className="container py-2">
            <h3 className="text-2xl font-bold">Personnel Productivity </h3>
            <p className="text-justify">
              With BB Truck Zone providing dedicated maintenance staff, many
              customers have found they can operate with fewer resources at the
              corporate level and/or with less time focused on managing fleet
              maintenance locally.
            </p>
          </div>

          <div className="container">
            <h3 className="text-2xl font-bold">Decision making</h3>
            <p className="text-justify">
              BB Truck Zone data provides an opportunity to make better
              decisions impacting the bottom line. For example, one national
              retail chain reduced their maintenance cost by $100,000 due to
              cost avoidance of a driver abuse situation that was realized
              through the data BB Truck Zone provides.
            </p>
          </div>
          </div>

        
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
