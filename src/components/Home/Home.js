import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../Assets/profile.jpg"; 
import Type from "./Type";

function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.className = darkTheme ? "light-theme" : "dark-theme";
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <header>
          <nav className="navbar">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + "/Assets/logo.png"} alt="Logo" />
            </div>
            <button className="theme-toggle" id="theme-toggle" onClick={toggleTheme}>
              {darkTheme ? "Light Theme" : "Dark Theme"}
            </button>
            <ul className="navbar-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">My Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <Container className="home-content">
          <Row className="hero">
            <Col md={7} className="hero-content">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h2 className="dynamic-text">
                I'M <strong>ARPITA GUPTA</strong>
              </h2>
              <div style={{ paddingTop: 20 }}>
                <Type />
              </div>
              <p>
                I am a passionate developer eager to take on challenging
                projects and deliver exceptional results. Let's work together!
              </p>
            </Col>
            <Col md={5} className="profile-container">
              <img
                src={homeLogo}
                alt="Profile"
                className="img-fluid profile-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="about-me">
        <h1>About Me</h1>
        <p>
          I am a developer with a keen interest in creating dynamic and
          user-friendly applications. I am enthusiastic about learning new
          technologies and collaborating on innovative projects.
        </p>
        <blockquote>"Your potential is endless."</blockquote>
      </Container>
      <footer>
        <p>© 2025 Arpita Gupta. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Home;
