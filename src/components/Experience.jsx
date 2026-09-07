import "./Experience.css";

function Experience() {
  const experiences = [
    {
      year: "May 2022 — Present",
      role: "Senior UI Developer",
      company: "Valethi Technologies LLP, Nagpur.",
      description:
        "Building responsive and pixel-perfect web interfaces from Figma and PSD designs  for e-commerce platforms, redemption code systems, and admin dashboard.",
      skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "ADA", "Debugging", "Figma to HTML Conversion", "Opencart", "Email Templates", "Git", "GitHub", "VS Code", "Managed Team", "React"],
    },
    {
      year: "February 2018 - March 2020",
      role: "UI Developer",
      company: "Spacewood Furnishers Pvt. Ltd., Nagpur.",
      description:
        "Designed and implemented web templates as front-end designer and developer for a leading furniture manufacturer.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "WordPress", "Photoshop"],
    },
    {
      year: "November 2017 - February 2018",
      role: "Junior UI Developer",
      company: "Vowel Web, Nagpur.",
      description:
        "Converted provided PSD designs into fully functional WordPress themes.",
      skills: ["HTML", "CSS", "Bootstrap", "WordPress", "PSD to WordPress themes"],
    },,
    {
      year: "September 2016 - January 2017 ",
      role: "UI Developer Intern",
      company: "Axiom Infovision, Nagpur.",
      description:
        "Converted PSD designs into responsive web pages using HTML5, CSS3, and Bootstrap.",
      skills: ["HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section className="experience page-section">
      <div className="section-label-box">
        <p className="section-label">EXPERIENCE</p>
      </div>
      <div className="theme-container experience-container">
        <div className="container-fluid">
          <div className="row align-items-end experience-heading">
            <div className="col-12">
              <div className="section-title-box">
                <h2 className="section-title experience-title">
                  <span>Professional </span>Journey.
                </h2>
                <p className="section-description">
                  My professional journey has been focused on frontend
                  development, UI implementation and turning designs into
                  web applicationss.
                </p>
              </div>
            </div>
          </div>
          {/* Experience List */}
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div
                className="row experience-item"
                key={index}
              >
                <div className="col-lg-2">
                  <div className="experience-year">
                    {experience.year}
                  </div>
                </div>
                
                <div className="col-lg-1 d-lg-flex justify-content-center">
                  <div className="experience-timeline">
                    <span></span>
                  </div>
                </div>
                
                <div className="col-lg-9">
                  <div className="experience-content">
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                    <p>{experience.description}</p>
                    <div className="experience-skills">
                      {experience.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;