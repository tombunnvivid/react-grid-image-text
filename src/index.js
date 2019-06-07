import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import { css, Global } from "@emotion/core";

function App() {
  return (
    <div>
      <Global
        styles={css`
          img {
            max-width: 100%;
          }

          body {
            color: #333;
          }
        `}
      />

      <Container>
        <Row>
          <Col md={6}>
            <img src="https://placehold.it/750x500" alt="" />
          </Col>
          <Col md={6}>
            <p>Lorem ipsum</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
