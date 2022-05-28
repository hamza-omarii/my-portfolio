import React from "react";

import {
  ContactStyle,
  CardContact,
  Cards,
  Logo,
  Content,
  Footer,
  End,
  Wrapper,
} from "./Style";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { BsWhatsapp, BsGithub, BsMouse2 } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiCopy } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <ContactStyle id="contact">
      <Container justify="space-between">
        <Title>contact me</Title>
        <Cards>
          <Fade delay={200} style={{ width: "100%" }}>
            <Wrapper>
              <CardContact href="mailto:hamzaahmadomari@gmail.com">
                <Logo>
                  <SiGmail />
                </Logo>
                <Content className="email">hamzaahmadomari@gmail.com</Content>
              </CardContact>
              <BiCopy
                size={30}
                className="copy"
                onClick={() =>
                  navigator.clipboard.writeText("hamzaahmadomari@gmail.com")
                }
              />
            </Wrapper>
          </Fade>
          <Fade delay={250} style={{ width: "100%" }}>
            <Wrapper>
              <CardContact href="https://api.whatsapp.com/send?phone=0795876750">
                <Logo>
                  <BsWhatsapp />
                </Logo>
                <Content>+962 795876750</Content>
              </CardContact>
              <BiCopy
                size={30}
                className="copy"
                onClick={() => navigator.clipboard.writeText("+962795876750")}
              />
            </Wrapper>
          </Fade>
          <Fade delay={300} style={{ width: "100%" }}>
            <Wrapper>
              <CardContact href="https://github.com/hamza-omarii/hamza-omarii">
                <Logo>
                  <BsGithub />
                </Logo>
                <Content>hamza-omarii</Content>
              </CardContact>
              <BiCopy
                size={30}
                className="copy"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://github.com/hamza-omarii/hamza-omarii"
                  )
                }
              />
            </Wrapper>
          </Fade>
        </Cards>
        <End>
          That's All
          <div style={{ margin: "8px 0px" }}>
            <BsMouse2 size={30} />
          </div>
          <a href="#home" style={{ textDecoration: "none" }}>
            - Scroll Up -
          </a>
        </End>
        <Footer>
          developed by hamza al-omari &copy; copyright{"  "}
          {new Date().getFullYear()}
        </Footer>
      </Container>
    </ContactStyle>
  );
};

export default Contact;
