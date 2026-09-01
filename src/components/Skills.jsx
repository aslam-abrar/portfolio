import { useEffect, useRef } from "react";
import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Markup & Styling",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Responsive Design",
        "Reusable Components",
        "Mobile-First Design",
      ],
    },
    {
      number: "02",
      title: "Scripting",
      skills: [
        "JavaScript",
        "jQuery",
      ],
    },
    {
      number: "03",
      title: "CMS & Platforms",
      skills: [
        "WordPress",
        "Opencart",
      ],
    },
    {
      number: "04",
      title: "Frameworks & Libraries",
      skills: [
        "React (Learning)",
      ],
    },
    {
      number: "05",
      title: "Design & Tools",
      skills: [
        "Adobe Photoshop",
        "PSD to HTML",
        "Figma to HTML",
        "Git & GitHub",
        "VS Code",
        "Chrome DevTools",
      ],
    },
    {
      number: "06",
      title: "Accessibility & QA",
      skills: [
        "ADA / WCAG",
        "Web Accessibility",
        "Debugging",
        "Cross-Browser Compatibility",
      ],
    },
  ];

  return (
    <section className="skills page-section">
      <div className="section-label-box">
        <p className="section-label">TECHNICAL</p>
      </div>
      <div className="theme-container skills-container">
        <div className="container-fluid">
          <div className="row align-items-end skills-heading">
            <div className="col-12">
              <h2 className="section-title about-title">
                <span>Technologies </span>I work with.
              </h2>
              <p className="section-description">
                A practical set of technologies, design tools and quality practices I use to create responsive, accessible and user-friendly web experiences.
              </p>
            </div>
          </div>
          <div className="theme-grids-box skills-grid">
            <div className="row g-4">
              {skillGroups.map((group) => (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={group.number}
                >
                  <div className="theme-card-box skill-card">
                    <div className="theme-card-box-top">
                      <span className="theme-card-number">
                        {group.number}
                      </span>
                      <span className="theme-card-line"></span>
                    </div>
                    <h3>{group.title}</h3>
                    <div className="theme-card-list">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={
                            skill === "Learning"
                              ? "skill-learning"
                              : ""
                          }
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom */}
          <div className="row">
            <div className="col-12">
              <div className="bottom-note">
                <span>CURRENTLY LEARNING</span>
                <p>React — currently learning React to improve my frontend development skillsand build reusable components.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="grid-dark-box skills-gids-box">
          <div className="container-fluid">
            <div className="skills-grids-box">
              <div className="skills-slider">
                <div className="skills-slider-track" ref={sliderRef}>
                  
                  <div className="skills-slider-group">
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-html5"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-css3-alt"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-bootstrap"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-js"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-text">
                          jQuery
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-universal-access"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-envelope-open-text"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-code"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-git-alt"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-github"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-file-image"></i>
                        </span>
                        <span className="grid-text">To</span>
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-html5"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-text">
                          Debugging
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-react"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="skills-slider-group">
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-html5"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-css3-alt"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-bootstrap"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-js"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-text">
                          jQuery
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-universal-access"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-envelope-open-text"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-code"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-git-alt"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-github"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-solid fa-file-image"></i>
                        </span>
                        <span className="grid-text">To</span>
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-html5"></i>
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-text">
                          Debugging
                        </span>
                      </div>
                    </div>
                    <div className="grid-dark-col">
                      <div className="grid-dark">
                        <span className="skills-grid-icon">
                          <i className="fa-brands fa-react"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


      </div>
      <div className="bg-effect">
        <span>SKILLS</span>
        <span>SKILLS</span>
        <span>SKILLS</span>
        <span>SKILLS</span>
      </div>
    </section>
  );
}

export default Skills;