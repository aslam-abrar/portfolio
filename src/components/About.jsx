import "./About.css";
import profileImage from "../assets/images/aslam-khan-image.jpg";

function About() {
  return (
    <section className="about page-section">
      <div className="section-label-box">
        <p className="section-label">ABOUT ME</p>
      </div>
      <div className="theme-container about-container">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left */}
            <div className="col-md-7 col-12">
              <div className="section-content about-content">
              <div className="about-content-top">
                <h2 className="section-title about-title">
                  <span>ABOUT</span> ME.
                </h2>
                <p class="hero-role">Frontend Developer</p>
                <p className="section-description"><span>Hi! I'm Aslam Khan</span>, I'm a UI Developer with 8+ years of professional experience converting PSD and Figma designs into pixel-perfect, responsive and cross-browser websites and web applications.</p>
                <p className="section-description">I have worked closely with designers, developers and QA teams to deliver scalable, maintainable and high-quality products. I'm currently expanding my expertise in React and component-based frontend development.</p>
                </div>
                <div className="grids-row about-content-bot about-highlights row g-3">
                  <div className="col-md-4 col-sm-4 col-12">
                    <div className="grid-light about-highlight">
                      <strong>Frontend</strong>
                      <span>Development</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-12">
                    <div className="grid-light about-highlight">
                      <strong>Responsive</strong>
                      <span>Web Design</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-12">
                    <div className="grid-light about-highlight">
                      <strong>Clean</strong>
                      <span>UI & Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
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
                      about.jsx
                    </div>
                  </div>
                  <div className="code-body">
                    <div>
                      <span className="code-purple">import </span> 
                      <span className="code-blue">profileImage </span>
                      <span className="code-purple">from </span> 
                      <span className="code-orange">"./assets/profile.jpg"</span> 
                      <span className="code-black">;</span>
                    </div>
                    <div className="code-box code-box-one">
                      <div>
                        <span className="code-black">{"<"}</span>
                        <span className="code-blue">img </span>
                      </div> 
                      <div className="code-box code-box-two">
                        <div className="code-indent">
                          <span className="code-green">src=</span> {" { "}
                          <div className="code-indent">
                            <div className="profile-image-wrapper">
                              <img
                                src={profileImage}
                                alt="Profile Aslam Khan"
                                className="profile-image"
                              /> 
                            </div>
                          </div>
                          <span className="code-black">
                            {" { "}
                          </span>
                        </div>
                      </div>
                      <div className="code-indent">
                        <span className="code-green">alt=</span>
                        <span className="code-orange">"Aslam Khan Profile Image."</span>
                      </div>
                      <div className="code-indent">
                        <span className="code-green">className=</span>
                        <span className="code-orange">"profile-image"</span>
                      </div>
                      <div>
                        <span className="code-black"> {" /> "}</span>
                        <span className="code-cursor">▋</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Cards */}
                <div className="floating-card d-flex flex-column card-one">
                  <strong>3+</strong>
                  <span>Companies</span>
                </div>
                <div className="floating-card d-flex flex-column card-two">
                  <strong>8+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-dark-box personal-gids-box">
            <div className="container-fluid">
              <div className="grids-row row g-3 justify-content-center">
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="grid-dark">
                      <span className="grid-dark-icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </span>
                      <h4>Education </h4>
                      <p>(B.E.) in Computer Science</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="grid-dark">
                      <span className="grid-dark-icon">
                        <i className="fa-solid fa-cake-candles"></i>
                      </span>
                      <h4>Date of birth</h4>
                      <p>April 02, 1991</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="grid-dark">
                      <span className="grid-dark-icon">
                        <i className="fa-solid fa-language"></i>
                      </span>
                      <h4>Spoken Languages</h4>
                      <p>Hindi - Marathi - English</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="grid-dark">
                      <span className="grid-dark-icon">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                      <h4>Availability</h4>
                      <p>Available for Freelance / Full-time</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
      <div className="bg-effect">
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
      </div>
    </section>
  );
}

export default About;
