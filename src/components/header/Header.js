import React, { useState, useEffect } from "react";
import "./Header.css";

let wordIndex = 0;
const wordList = ["SMS", "EMAIL", "WHATSAPP", "MESSENGER"];

const Header = () => {
     const [word, setWord] = useState("SMS");

     useEffect(() => {
          const interval = setInterval(() => {
               wordIndex = (wordIndex + 1) % wordList.length;
               setWord(wordList[wordIndex]);
          }, 2000);
          return () => clearInterval(interval);
     }, []);

     return (
          <>
               <div className="row h-100 h-sm-75">
                    <div className="col-lg-6 col-sm-12 my-lg-auto mt-auto text-left">
                         {/* <img
                              src="./assets/images/shoutout-logo.svg"
                              alt="ShoutOUT Logo"
                              width="200"
                         /> */}
                         <h1 className="font-weight-bold d-flex mb-3">
                              <div>Send</div>
                              <div
                                   className={`ml-2 line-height-12 text-primary type-effect type-effect-${word.toLowerCase()}`}
                              />
                         </h1>
                         <h6 className="text-muted text-left my-3 sub-title">
                              ShoutOUT is the all-in-one platform for
                              understanding, engaging and rewarding your
                              customers
                         </h6>
                         <button className="btn btn-outline-primary rounded-0">
                              Get Started
                         </button>
                    </div>
                    <div className="col-lg-6 col-sm-12 my-auto text-center">
                         <div className="phone position-relative">
                              <img
                                   className="position-absolute phone-content top-right-0 w-25"
                                   src={`./assets/images/${word.toLowerCase()}.svg`}
                                   alt="Phone Mockup"
                              />
                         </div>
                    </div>
               </div>

               <div className="row my-4">
                    <div className="col-lg-3 col-sm-12 my-auto">
                         <div className="card p-4 shadow rounded-0 border-0">
                              <h3 className="font-weight-bold mb-0">SMS</h3>
                         </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 my-auto">
                         <div className="card p-4 shadow rounded-0 border-0">
                              <h3 className="font-weight-bold mb-0">Email</h3>
                         </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 my-auto">
                         <div className="card p-4 shadow rounded-0 border-0">
                              <h3 className="font-weight-bold mb-0">
                                   WhatsApp
                              </h3>
                         </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 my-auto">
                         <div className="card p-4 shadow rounded-0 border-0">
                              <h3 className="font-weight-bold mb-0">
                                   Messenger
                              </h3>
                         </div>
                    </div>
               </div>
          </>
     );
};
export default Header;
