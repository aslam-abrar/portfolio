import "./Header.css";
import { Collapse } from "bootstrap";

function Header({ activeSection, setActiveSection }) {
  const menuItems = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Skills", value: "skills" },
    { label: "Projects", value: "projects" },
    { label: "Experience", value: "experience" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <header id="headerArea" className="headerArea">
      <nav className="navbar navbar-expand-lg">
        <div className="theme-container header-container">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="header-box d-flex align-items-center justify-content-between">
                  <button
                    className="navbar-brand site-logo border-0 bg-transparent"
                    onClick={() => setActiveSection("home")}
                  >
                    A<span>K.</span>
                  </button>
                  <button
                    className="navbar-toggler header-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#portfolioNavbar"
                    aria-controls="portfolioNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-bar toggle-bar-1"></span>
                    <span className="navbar-toggler-bar toggle-bar-2"></span>
                    <span className="navbar-toggler-bar toggle-bar-3"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="portfolioNavbar"
                    >
                    <div className="main-nav ms-auto">
                      {menuItems.map((item) => (
                        <button
                          key={item.value}
                          className={`nav-link ${
                            activeSection === item.value ? "active" : ""
                          }`}
                          onClick={() => {
                            setActiveSection(item.value);
                            const navbarHeader = document.getElementById("portfolioNavbar");
                            const collapse = Collapse.getInstance(navbarHeader);
                            if (collapse) {
                              collapse.hide();
                            }
                          }}

                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;