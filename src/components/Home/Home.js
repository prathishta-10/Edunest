import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        {/* Home Content */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span style={{ color: "white" }}>EduNest</span>
                <span className="wave" role="img" aria-labelledby="wave">
                  📖
                </span>
              </h1>

              <h3 className="heading-name">
                <strong className="main-name">
                  Unlock the power of personalized Learning at Your doorstep!
                  Learning made easy: One-on-One at Home
                  Where education meets Comfort, and personalized
                  learning thrives.
                </strong>
              </h3>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
