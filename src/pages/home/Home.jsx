import React from "react";
import {
  HomeStyle,
  Header,
  Comma,
  Name,
  Job,
  Title,
  Desc,
  Img,
  Content,
} from "./Style";

import { Fade, Zoom } from "react-awesome-reveal";

import Container from "../../components/Container";
import img from "../../images/pro-modified.png";

const Home = () => {
  return (
    <HomeStyle id="home">
      <Container justify="space-around">
        <Fade direction="down">
          <Header>
            <Title>
              I<Comma>'</Comma>M<Name> Hamza Al-Omari</Name>
              <Job
                options={{
                  strings: [
                    "BACK-END WEB DEVELOPER",
                    "FRONT-END WEB DEVELOPER",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              ></Job>
            </Title>
          </Header>
        </Fade>

        <Content>
          <Zoom>
            <Img src={img} alt="" />
          </Zoom>
        </Content>
        <Desc>
          Recent Software Engineering Graduate From Hashemite University , I
          work in Front-end and Back-end Web-Development, And I have experience
          in dealing with programming and modern web technologies,And I have
          built a lot of projects that have increased my experience and trained
          me a lot,I'm a fast learner and always love to develop myself .
        </Desc>
      </Container>
    </HomeStyle>
  );
};

export default Home;
