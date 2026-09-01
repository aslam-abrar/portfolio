import "./Contact.css";

function Contact() {
  return (
    <section className="contact page-section">
      <div className="section-label-box">
        <p className="section-label">CONTACT</p>
      </div>
      <div className="theme-container contact-container">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-title-box">
                <h2 className="section-title experience-title">
                  <span>Let's </span>Connect.
                </h2>
                <p className="section-description">
                  I'm open to opportunities where I can contribute my 8+ years of UI development experience, build high-quality frontend experiences, and grow with a great team. 
                </p>
              </div>
            
              <div className="theme-btn-box">
                <a
                  href="/resume/resume.pdf"
                  className="btn theme-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <span><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </a>
                <a
                  href="/resume/resume.pdf"
                  className="btn theme-btn-secondry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                  <span><i className="fa-solid fa-download"></i></span>
                </a>
              </div>
            </div>
            {/* Right Content */}
            <div className="col-lg-4 offset-lg-1 mt-5 mt-lg-0">
              <div className="contact-info">
                <div className="contact-info-inner">
                  <div className="contact-info-box">
                    <div className="contact-icon contact-info-icon">
                      <a href="#">
                        <i className="fa-solid fa-phone"></i>
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <h3>Call Me</h3>
                      <p>+91 9175 6888 48</p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="contact-icon contact-info-icon">
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <h3>Email Me</h3>
                      <p>aslamabrarkhan@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="contact-icon contact-info-icon">
                      <a href="#">
                        <i className="fa-solid fa-location-dot"></i>
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <h3>Address</h3>
                      <p>Akot, Akola, Maharashtra - 444101</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="row">
            <div className="col-12">
              <div className="bottom-note">
                <span>HAVE A PROJECT OR OPPORTUNITY?</span>
                <p>
                  Let's talk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-effect">
        <span>RESUME</span>
        <span>RESUME</span>
        <span>RESUME</span>
        <span>RESUME</span>
      </div>
    </section>
  );
}

export default Contact;