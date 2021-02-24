import React from 'react';

//components
import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title/title.component';
import About from './pages/about/about.component'
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Skills from './pages/Skills/skills.component';
import BgImage from "./assets/img/parallex/background.webp";
import Projecttimeline from "./components/timeline/timeline.component";
import FooterPanel from './components/footer/footer.component';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions"

const App = () => {
  return (<div style ={{ position: "relative" }}>
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
    <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={BgImage}
        bgImageAlt=""
        strength={-200}
      >
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </div>
      </Parallax>
    </div>
    <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImageAlt=""
        strength={-200}
      >
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <Skills />
            </Slide>
          </Container>
        </div>
      </Parallax>
    </div>
    <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImageAlt=""
        strength={-200}
      >
        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <hr />
              <Projecttimeline />
            </Slide>
          </Container>
        </div>
      </Parallax>
    </div>

    <hr />
    <FooterPanel />
    
  </div>);

};

export default App;
