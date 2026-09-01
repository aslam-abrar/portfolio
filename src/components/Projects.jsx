import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Project Name",
      description:
        "A responsive web application developed with a focus on clean UI, usability and responsive design.",
      technologies: ["React", "JavaScript", "Bootstrap"],
    },
    {
      number: "02",
      title: "Project Name",
      description:
        "A modern web interface built with reusable components and responsive layouts for different screen sizes.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "03",
      title: "Project Name",
      description:
        "A user-focused frontend project with interactive elements and a clean, maintainable component structure.",
      technologies: ["React", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section className="projects page-section">
      <div className="section-label-box">
        <p className="section-label">PROJECTS</p>
      </div>
      <div className="theme-container projects-container">
        <div className="container-fluid">
          {/* Heading */}
          <div className="row align-items-end projects-heading">
            <div className="col-12">
              <h2 className="section-title about-title">
                <span>Things </span>I've built.
              </h2>
              <p className="section-description">
                A selection of projects that showcase my approach to
                frontend development, responsive design and building
                practical user experiences.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="theme-grids-box projects-grid">
            <div className="row g-3">
              {projects.map((project) => (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={project.number}
                >
                  <div className="theme-card-box skill-card">
                    <div className="theme-card-box-top project-top">
                      <span className="theme-card-number project-number">
                        {project.number}
                      </span>
                      <span className="theme-card-line"></span>
                    </div>
                    <div className="project-preview">
                      <img
                        src="https://shopmarriottmerch.com/"
                        title="Project Preview"
                        loading="lazy"
                      />
                    </div>
                    <div className="theme-card-content project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    <div className="project-bottom">
                      <div className="theme-card-list project-tech">
                        {project.technologies.map((technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                      <span className="project-arrow">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Bottom */}
          {/* <div className="row">
            <div className="col-12">
              <div className="bottom-note">
                <span>SELECTED WORK</span>
                <p>More projects and details are available on request.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-effect">
        <span>WORK</span>
        <span>WORK</span>
        <span>WORK</span>
        <span>WORK</span>
      </div>
    </section>
  );
}

export default Projects;