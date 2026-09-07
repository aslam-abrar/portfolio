import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Marriott",
      description:
        "A responsive web application developed with a focus on clean UI, usability and responsive design.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      tags: ["eCommerce", "Admin Dashboard", "Login", "Figma to Web", "Responsive"],
      url: "https://shopmarriottmerch.com/",
    },
    {
      number: "02",
      title: "Astore Merchandise Shop",
      description:
        "A modern web interface built with reusable components and responsive layouts for different screen sizes.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      tags: ["eCommerce", "Admin Dashboard", "Login", "Figma to Web", "Responsive", "Accessibility"],
      url: "https://shopaccormerch.com/"
    },
    {
      number: "03",
      title: "Atlassian Shop",
      description:
        "A responsive web application developed with a focus on clean UI, usability and responsive design.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      tags: ["eCommerce", "Admin Dashboard", "Figma to Web", "Responsive", "Accessibility"],
      url: "https://shop.atlassian.com/",
    },
    {
      number: "04",
      title: "Shoppe Psico Premiums",
      description:
        "A responsive web application developed with a focus on clean UI, usability and responsive design.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      tags: ["eCommerce", "Admin Dashboard", "Login", "Figma to Web", "Responsive", "Accessibility"],
      url: "https://shoppepsicopremiums.com/",
    },
    {
      number: "05",
      title: "The Casita",
      description:
        "A user-focused frontend project with interactive elements and a clean, maintainable component structure.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      tags: ["eCommerce", "Admin Dashboard", "Figma to Web", "Responsive", "Accessibility"],
      url: "https://casadetostitos.shop/"
    },
    {
      number: "06",
      title: "Mastercard",
      description:
        "A user-focused frontend project with interactive elements and a clean, maintainable component structure.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      tags: ["eCommerce", "Admin Dashboard", "Figma to Web", "Responsive", "Accessibility"],
      url: "https://team.mastercardmerch.com/"
    },

    // https://team.mastercardmerch.com/
    // https://nyulhstoreext.admsolutions.com/
    // https://brandstore.nyulangone.org/store/index.php?route=account/login
    // https://uberswag.admsolutions.com/store/index.php?route=account/login
    // https://deutschmarketplace.com/
    // https://redeemmyecodes.com/personalizedcuttingboard/
    // https://redeemmyecodes.com/stetsonhat1/
    // https://nyuappreciation2025preprod.lapine.dev/
    // https://deutschmarketplace.com/
    // https://redeemmyecodes.com/stetsonhat1/index.php?route=redemption/code
    // https://safetyworksmarketplace.lapineinc.com/
    // https://welcomegiftprogram.com/index.php?route=redemption/code
    // https://redeemmyecodes.com/leeshirt/
  ];

  return (
    <section className="projects page-section">
      <div className="section-label-box">
        <p className="section-label">PROJECTS</p>
      </div>
      <div className="theme-container projects-container">
        <div className="container-fluid">
          <div className="row align-items-end projects-heading">
            <div className="col-12">
              <h2 className="section-title about-title">
                <span>Things </span>I've built.
              </h2>
              <p className="section-description">
                A collection of recent projects I've worked on that showcase my approach to
                frontend development, responsive websites and building practical user experiences.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="theme-grids-box projects-grid">
            <div className="row g-3">
              {projects.map((project) => (
                <div className="col-lg-4 col-md-6 col-12" key={project.number} >
                    <div className="theme-card-box skill-card">
                      <a href={project.url} target="_blank">
                        <div className="theme-card-box-top project-top">
                          <span className="theme-card-number project-number">
                            {project.number}
                          </span>
                          <span className="theme-card-line"></span>
                        </div>
                        {/* <div className="project-preview">
                          <img
                            src=""
                            title="Project Preview"
                            loading="lazy"
                          />
                        </div> */}
                        <div className="theme-card-content project-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                        <div className="project-bottom">
                          <div className="theme-card-list project-tags">
                            {project.tags.map((tag) => (
                              <span key={tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="project-tech">
                            <div className="project-tech-box">
                              {project.technologies.map((technology) => (
                                <p key={technology}>
                                  {technology}
                                </p>
                              ))}
                              </div>
                            <span className="project-arrow">
                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                </div>
              ))}
            </div>
          </div>

           <div className="row">
            <div className="col-12">
              <div className="bottom-note">
                <span>SELECTED WORK</span>
                <p>More projects and details are available on request.</p>
              </div>
            </div>
          </div>
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