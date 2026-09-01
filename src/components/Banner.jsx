import "./Banner.css";

function Banner({ setActiveSection }) {
  return (
    <section className="banner page-section">
      <div className="section-label-box">
        <p className="section-label">FRONTEND DEVELOPER</p>
      </div>
      <div className="theme-container banner-container">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-7 col-12">
              <div className="section-content banner-content">
                <p className="banner-intro">Hello, I'm</p>
                <h1 className="section-title banner-title">
                  <span>Aslam Khan.</span>
                </h1>
                <p className="hero-role">Frontend Developer</p>
                <p className="banner-description section-description">
                  I create pixel-perfect, responsive and accessible web experiences from PSD and Figma designs. I specialize in modern frontend development, responsive interfaces, CMS-driven websites and cross-browser compatibility.
                </p>
                <div className="profile-contact-box">
                  <div className="banner-status d-inline-flex align-items-center">
                    <span className="status-dot"></span>
                    Available for work
                  </div>
                  <div className="contact-box-devider"></div>
                  <div className="contact-icon-box">
                    <div className="contact-icon">
                      <a 
                        href="https://www.linkedin.com/in/aslam-khan-a229ba137/" 
                        target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="contact-icon">
                      <a href="mailto:aslamabrarkhan@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                    <div className="contact-icon">
                      <a href="tel:+919175688848">
                        <i className="fa-solid fa-phone"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="theme-btn-box">
                  <button
                    className="btn theme-btn-primary"
                    onClick={() => setActiveSection("contact")}
                  >
                    Get In Touch
                  </button>

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
            </div>

            {/* Right Visual */}
            <div className="col-md-5 col-12">
              <div className="banner-visual d-flex align-items-center justify-content-center">
                <div className="code-card">
                  <div className="code-header d-flex align-items-center">
                    <div className="window-dots d-flex">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="window-title">
                      portfolio.jsx
                    </div>
                  </div>
                  <div className="code-body">
                    <div className="code-box code-box-one">
                      <div>
                        <span className="code-purple">const</span>{" "}
                        <span className="code-blue">uideveloper</span>{" "}
                        = {"{"}
                      </div>
                      <div className="code-indent">
                        <span className="code-key">name:</span>{" "}
                        <span className="code-green">
                          "Aslam Khan"
                        </span>,
                      </div>
                      <div className="code-indent">
                        <span className="code-key">role:</span>{" "}
                        <span className="code-green">
                          "Frontend Developer"
                        </span>,
                      </div>
                      <div className="code-box code-box-two">
                        <div className="code-indent">
                          <span className="code-key">skills:</span>{" "}
                          [
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "HTML5"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "CSS3"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "Bootstrap"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "Responsive"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "Wordpress"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "Opencart"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "Figma to HTML"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "React"
                            </span>,
                          </span>
                        </div>
                        <div className="code-indent">
                          <span className="code-indent">
                            <span className="code-green">
                              "UI/UX"
                            </span>
                          </span>
                        </div>

                        <div className="code-indent">
                          ],
                        </div>
                      </div>

                      <div>
                        {"}"}
                      </div>
                    </div>
                    <div>
                      <span className="code-purple">export</span>{" "}
                      <span className="code-purple">default</span>{" "}
                      uideveloper;
                      <span className="code-cursor">▋</span>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1 */}
                <div className="floating-card d-flex flex-column card-one">
                  <strong>8+</strong>
                  <span>Years Experience</span>
                </div>
                {/* Floating Card 2 */}
                <div className="floating-card d-flex flex-column card-two">
                  <strong>&lt;/&gt;</strong>
                  <span>Pixel Perfect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-effect">
        <span>FRONTEND</span>
        <span>FRONTEND</span>
        <span>FRONTEND</span>
        <span>FRONTEND</span>
      </div>
    </section>
  );
}

export default Banner;
