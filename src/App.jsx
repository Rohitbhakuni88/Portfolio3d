import { BrowserRouter } from "react-router-dom";

import GalaxyBackground from "./components/canvas/GalaxyBackground";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/* === Galaxy Background (3D Shader + Particle System) === */}
        <GalaxyBackground />

        {/* === Main Content Layer === */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
