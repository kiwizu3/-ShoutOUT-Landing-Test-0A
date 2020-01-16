import React from "react";
import "./Companies.scss";

const companies = [
     "Company 01",
     "Company 02",
     "Company 03",
     "Company 04",
     "Company 05",
     "Company 06",
     "Company 07",
     "Company 08",
     "Company 09",
     "Company 10",
     "Company 11",
     "Company 12",
     "Company 13",
     "Company 14",
     "Company 15"
];

const Companies = () => {
     return (
          <>
               <div className="row">
                    <div className="col-lg-12 col-sm-12 my-auto">
                         <h4 className="font-weight-bold mb-0">
                              in good company
                         </h4>
                    </div>
                    <div className="row w-100 overflow-scroll">
                         {/* <div className="d-flex">
                              {companies.map((company, index) => {
                                   return (
                                        <div
                                             key={index}
                                             className="card p-4 rounded-0 border-0"
                                        >
                                             <small className="font-weight-bold mb-0">
                                                  {company}
                                             </small>
                                        </div>
                                   );
                              })}
                         </div> */}
                         <div class="slider">
                              <div class="slide-track">
                                   {companies.map((company, index) => {
                                        return (
                                             <div
                                                  key={index}
                                                  className="slide card p-4 rounded-0 border-0"
                                             >
                                                  {/* <img
                                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                                             height="100"
                                             width="250"
                                             alt=""
                                        /> */}
                                                  <small className="font-weight-bold mb-0">
                                                       {company}
                                                  </small>
                                             </div>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};
export default Companies;
