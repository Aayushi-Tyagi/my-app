import "./AboutContentStyle.css";

import React from 'react';
import { Link } from "react-router-dom";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Full-Stack Developer. I create responsive secure website which is open at any mobile type device or a tablet.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Project4} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Project5} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;