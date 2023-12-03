import React from "react";
import "../CSS/About.css";
const About = () => {
  return (
    <>
      <section className=" profile">
        <div className="photo">
          <img src="./my-photo.jpg" />
        </div>
        <div className="desc">
          <p className="mb-2">
            Experienced UI Developer | Frontend Developer | 🌐 Transforming
            Ideas into Seamless User Experiences 🚀 | HTML5 | CSS3 | JavaScript
            | React | Responsive Design
          </p>
          <p>
            Welcome to my portfolio! I am Akshay, a passionate UI Developer
            dedicated to crafting exceptional user interfaces and immersive
            digital experiences. With a solid foundation in HTML5, CSS3, and
            JavaScript, including expertise in React JS, I specialize in
            creating responsive and visually captivating websites that engage
            and delight users. Meticulous attention to detail ensures that
            designs are faithfully translated into functional and visually
            appealing web interfaces. Committed to inclusive design practices, I
            ensure all projects adhere to web accessibility standards, creating
            digital experiences that everyone can enjoy. My expertise in
            responsive web design guarantees optimal user experiences across
            various devices and screen sizes. As a proven team player, I
            collaborate closely with designers, backend developers, and
            stakeholders to bring projects from concept to fruition. Proficient
            in troubleshooting and debugging, I navigate technical challenges to
            ensure smooth functionality throughout the development process. Your
            project is in capable hands, and I am dedicated to delivering
            excellence in every aspect of UI development.
          </p>
        
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2 className="sec-title">EXPERIENCE</h2>
          <div className="experience-ct">
            <div className="row">
              <div className="col-md-6 timeline-label">
                <h4 className="key-area">Key areas</h4>
                <h3 className="exp-label">
                  Front End Development, and UI Development.
                </h3>
                <a
                  href="https://www.linkedin.com/in/akshay-wakle/"
                  alt="LinkedIn profile"
                  target="_blank"
                >
                  <div className="button-group-li">
                    <div className="text-timeline">View on LinkedIn</div>

                    <div className="icon-li">
                      {/* <span className="fa fa-linkedin" aria-hidden="true" /> */}
                      <i class="fab fa-linkedin"></i>


                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 timeline col-exp">
                <div className="timeline-year">
                  <time dateTime={2023}>2023</time>
                  <div className="timeline-experience">
                    <span className="timeline-circle" />
                    
                    <div className="timeline-experience-info clear-after">
                      <h5>Proctur - Simplifying Education Management</h5>
                      <div className="timeline-role">Sr. UI Developer</div>
                      <p>Apr 2023 - Present</p>
                    </div>
                  </div>
                  <time dateTime={2022}>2022</time>
                  <div className="timeline-experience">
                    <span className="timeline-circle" />
                    <div className="timeline-experience-info clear-after">
                      <h5>Proctur - Simplifying Education Management</h5>
                      <div className="timeline-role">Jr. UI Developer</div>
                      <p>Jun 2022 - Mar 2023</p>
                    </div>
                  </div>
                </div>
                <div className="timeline-year timeline-year1">
                  <time dateTime={2021}>2021</time>
                  <div className="timeline-experience">
                    <span className="timeline-circle" />
                    <div className="timeline-experience-info clear-after">
                      <h5>Freelancer</h5>
                      <div className="timeline-role">UI Developer</div>
                      <p>Sep 2021 - Jun 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
