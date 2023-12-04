import React from "react";
import "../CSS/Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contatc Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!.
                        </p>
                        <form
                          action="https://formspree.io/f/myyqqrez"
                          method="POST"
                        >
                          <input
                            type="text"
                            className="form-control form-group"
                            name="username"
                            placeholder="Name"
                            autoComplete="off"
                            required
                          />
                          <input
                            type="email"
                            className="form-control form-group"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                          />
                          <textarea
                            className="form-control form-group"
                            name="message"
                            placeholder="Message"
                            autoComplete="off"
                            required
                          ></textarea>
                        </form>

                        <button className="contact_form_submit" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <div className="round">
                      <i className="fas fa-phone"></i>
                    </div>
                    <span>+91 9823 9545 02</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <div className="round">
                      <i className="far fa-envelope"></i>
                    </div>
                    <span>webdev.akshay@gmail.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <div className="round">
                      <i classs="fas fa-map-marker-alt"></i>
                    </div>
                    <span>Narhe, Pune, MH 411041</span>
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

export default Contact;
