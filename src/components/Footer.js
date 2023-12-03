import React from "react";
import '../CSS/Footer.css'
const Footer = () => {
  return (
    <div>
      <section className="footer">
      <h6 className="fname">Follow Me</h6>
        <div class="rounded-social-buttons">
          <a
            class="social-button twitter"
            href="https://twitter.com/akshay_sw13"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="social-button linkedin"
            href="https://www.linkedin.com/in/akshay-wakle"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          
          <a
            class="social-button  github"
            href="https://github.com/akshay-webdev"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <p className="copy">Copyright © 2023- Akshay Wakle. All rights reserved.</p>
      </section>
    </div>
  );
};

export default Footer;
