import { useState } from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
    <div id="app">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="page-content">
        {activeSection === "home" && (
          <Banner setActiveSection={setActiveSection} />
        )}
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "contact" && <Contact />}
        <Footer setActiveSection={setActiveSection} />
      </main>
    </div>
    </>
  );
}

export default App;