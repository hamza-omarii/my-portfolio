import React, { useState, useEffect } from "react";

import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Nav from "./components/Nav.jsx";
import BgCircle from "./components/BgCircle";
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";

const App = () => {
  const [loading, setLoading] = useState(true);

  const SpinnerContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <ScaleLoader
            loading={loading}
            height={80}
            width={8}
            margin={5}
            color={"#FFF"}
          />
        </SpinnerContainer>
      ) : (
        <>
          <Nav />
          <BgCircle />
          <BgCircle dir={"top right"} />
          <BgCircle dir={"top left"} />
          <BgCircle dir={"bottom right"} />

          {/* PAGES */}
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
