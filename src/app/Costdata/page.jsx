import React from 'react'
import Headers from "../Headers/page"
import Footer from "../Footer/page"
import Client1 from "../../assets/img/cost-red.jpeg"
import Image from "next/image"
function page() {
  return (
    <>
    <div className="mt-5">
       <Headers/>
       <div>
        
        <div  className="px-5   py-5 text-justify mt-5  mb-2">
        <div className="py-2">
           
           <h3
         
             className="font-bold text-2xl mt-5 "
           >
Cost Reduction Data
           </h3>
           <p
           className="text-justify"
           >
            BB Truck Zone® captures detailed repair information on each breakdown or repair to help you reduce maintenance events. Using Vehicle Maintenance Reporting Standard (VMRS) codes to record each event, we provide useful data to help your maintenance team easily identify issues that need to be addressed with your fleet and make even better maintenance decisions.
           </p>
           <p
           className="text-justify"
          >
By providing unique insights to make your maintenance operation more productive, we help you gain better control of your fleet. Measuring your miles between breakdowns and miles between repairs allows you to compare your company year over year against regions or locations to see if improvements are needed in specific areas such as equipment, processes or procedures.          </p>
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
How Vehicle Maintenance Reporting Standard (VMRS) Coding Works
               </h3>
               <p
              
                 className="text-justify"
               >
Any maintenance or repair work can be analyzed with the help of VMRS coding, which allows you to evaluate costs and identify preventive measures per vehicle operating system.  BB Truck Zone has 11 primary cost buckets to categorize prices relative to components through VMRS codes. We code every invoice with the proper system and sub-assembly code along with the proper reason for repair and work accomplished codes. Each maintenance invoice can be translated into your system based on the codes you require per your equipment. This allows  BB Truck Zone to provide a detailed cost analysis that shows exactly where maintenance expenses are going.               </p>
       
               
             
              
             </div>
           </div>
         
        
           <div className="py-2">
             <h3
             
             
               className="font-bold text-2xl"
             >
VMRS Specialist Certification             </h3>
             <p
             
           
               className="text-justify"
             >
TMC offers a VMRS Specialist Certification program through which 25  BB Truck Zone employees are accredited. With a 90%+ accuracy rate, you can rely on  BB Truck Zone to provide a clear picture of what’s happening within your fleet to help you find solutions to reduce breakdowns and save money.              </p>
 
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