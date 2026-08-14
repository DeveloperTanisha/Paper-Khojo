import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Description */}
        <div className="footer-brand">
          <img src="/logo11.png" alt="Logo" className="footer-logo" />

          <p className="footer-description">
            Previous Year Question Papers and study resources, all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/colleges">Colleges</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/pyq">PYQ</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </div>

        {/* Popular Subjects */}
        <div className="footer-column">
          <h3>Popular Subjects</h3>

          <a href="#">Data Structures</a>
          <a href="#">Database Management</a>
          <a href="#">Operating Systems</a>
          <a href="#">Computer Networks</a>
          <a href="#">Web Development</a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Connect With Us</h3>

          <div className="social-icons">
            <p><FaInstagram /></p>
            <p><FaFacebook /></p>
            <p><FaTwitter /></p>
            <p><MdEmail /></p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © 2026 Paper Khojo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;