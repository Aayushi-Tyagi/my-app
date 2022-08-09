import "./FooterStyle.css";

import React from "react";

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
              <div className="location">
                <FaHome size={25} style={{color: "#fff", marginRight:"2rem"}} />
                  <div>
                      <p>D/O: Sanjeev Tyagi, 371, Sanjeev Kunj, Subhash Chowk, Deoband, Saharanpur</p>
                      <p>Pin code: 247554</p>
                  </div>
              </div>
              <div className="phone">
              <h4><FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>8218683802</h4>
              </div>
              <div className="email">
              <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>aayushitya@gmail.com</h4>
              </div>
           </div> 
           <div className="right">
                <div className="social">
                    <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaGithub size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer