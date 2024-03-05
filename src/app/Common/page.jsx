import React from 'react'
import Headers from "../Headers/page"
import Footer from "../Footer/page"
import Client1 from "../../assets/img/road-side.jpeg"
import Image from "next/image"
function page() {
  return (
    <>
    <div>
       <Headers/>
       <div>
        
       <div  className="px-5   py-5 text-justify mt-5  mb-2">
       <div className="py-2">
          
          <h3
        
            className="font-bold text-2xl mt-5 "
          >
 Emergency Roadside Assistance
          </h3>
          <p
          className="text-justify"
          >
           Roadside breakdowns cause missed deliveries, customer complaints and lost revenue. Turn the chaos into order with BB Truck Zone Emergency Roadside Assistance. We get fleets up and running faster than anyone else in the industry.
          </p>
     
        </div>
            <Image src={Client1} className="img-fluid emergency-img mt-4 mb-2 bg-img-side"  alt=""/>
            </div>
       </div>
       <div className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-20 text-justify mt-5 ">
          <div>
        

            <div className="py-2">
              <h3
            
                className="font-bold text-2xl"
              >
             Your Roadside Emergency is Important to Us
              </h3>
              <p
             
                className="text-justify"
              >
              With BB Truck Zone, you can rest assured your commercial fleet breakdown needs are handled professionally and efficiently. The result is more on-time deliveries and better customer service. Here’s how we help:
              </p>
              <p
             
                className="text-justify"
              >
               Because we handle more roadside events than any other company and treat the service providers including independent contractors, OEMs and dealers handling your breakdown fairly, there’s urgency when a BB Truck Zone customer has an emergency breakdown.
                identity
              </p>
              <p
             
                className="text-justify mt-2"
              >
              When you call, an experienced mechanic reviews the details of the event, assesses the situation and dispatches the appropriate service provider to the breakdown location.
              </p>
              <li
             
                className="text-justify mt-2"
              >
           You get real-time updates every step of the way. Stay informed of your roadside emergency status with instant updates via text messages, emails and secure web logins.
              </li>
            
             
            </div>
          </div>
          <div>
            <li
            
            
              className="text-justify mt-2"
            >
              Information provided to us through our service, interaction with
              our customer service, participation in surveys or marketing
              promotions.
            </li>
          </div>
       
          <div className="py-2">
            <h3
            
            
              className="font-bold text-2xl"
            >
          Shorter Hold Times Mean Less Time on the Side of the Road
            </h3>
            <p
            
          
              className="text-justify"
            >
             The entire emergency roadside assistance process is supported by a technically advanced phone system that records all inbound and outbound calls. This allows our shift supervisor to monitor the number of staff members available to receive inbound calls, the number of calls on hold and how long they’ve been holding — all focused on managing call volume, so that you don’t have to wait.
            </p>

            <h3
            
            
            className="font-bold text-2xl"
          >
      

          </h3>
          <h3
            
            
            className="font-bold text-2xl"
          >
Matched to the Right Roadside Emergency Provider
          </h3>
          <p
            
           
              className="text-justify"
            >We understand that competency and proximity are important when it comes to roadside assistance. To make sure you get the help you need when you need it, we use an internal rating system to assign a provider, on a case-by-case basis. Considerations for each independent contractor include: customer preference, proximity to the downed unit, internal ranking, provider availability (time of day) and skill sets.</p>
          </div>
          <div className="py-2">
            <h3
            
           
              className="font-bold text-2xl"
            >
            Accurate Invoicing to Make Your Job Easier
            </h3>
            <p
            
           
              className="text-justify"
            >
          Our billing department thoroughly reviews all invoices and enters the detailed information into our system using Vehicle Maintenance Reporting Standards (VMRS) Coding. This enables everyone involved in the service supply chain to understand what happened during the repair.

            </p>
            <p
            
           
              className="text-justify"
            >
            We perform both operational audits and price compliance audits on every invoice, ensuring you received the services you needed, without being overcharged. If charges exceed normal ranges, we’ll request a corrected invoice from the service provider — taking the stress out of your hands. 
            </p>
          </div>
       

       

       
         
        </div>
       </div>
       <Footer/>
       </>
  )
}

export default page