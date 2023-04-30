import { FaFacebook, FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyle.css";

import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <div>
                            <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        </div>
                        <div>
                            <p>
                                Ramashram Kunj, JP Nagar
                            </p>
                            <p>Siwan, Bihar, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                             7869506054
                        </h4>

                    </div>
                    <div className="phone">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                            anupbhagat222@gmail.com
                        </h4>

                    </div>
                </div>
                <div className="right">
                    <h4>Social Media Links</h4>
                    <div className="social">
                        <FaFacebook className="icon" size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaTwitter className="icon" size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaLinkedinIn className="icon" size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaGithub className="icon" size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer