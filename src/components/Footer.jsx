import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-copy">
              © 2026 Aslam Khan. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="footer-links">
              <a href="https://github.com/aslam-abrar" target="_blank">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/aslam-khan-a229ba137/" target="_blank">
                LinkedIn
              </a>
              <a href="mailto:aslamabrarkhan@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;