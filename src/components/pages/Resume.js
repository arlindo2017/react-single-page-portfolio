import React from "react";
import { CSSTransition } from "react-transition-group";
import "./animations.css";

// Custom CSS Style
const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.8",
    color: "white",
    paddingBottom: "50px",
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
    margin: "10px",
  },
};

export default function Resume() {
  return (
    <CSSTransition
      transitionName={{
        enter: "enter",
        leave: "leave",
        appear: "appear",
      }}
    >
      <div>
        <div className="card" style={styles.cardBodyStyle}>
          <h4 className="card-header">Proficiencies</h4>
          <div className="card-body">
            <ul>
              <li>HTML</li>
              <li>Javascript</li>
              <li>Nodejs</li>
              <li>CSS</li>
              <ol>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>Foundation CSS</li>
              </ol>
              <li>Backend</li>
              <ol>
                <li>SQL</li>
                <li>MondoDB</li>
                <li>Apollo Server</li>
              </ol>
            </ul>
          </div>
          <div className="card-footer">
            <i className="bi bi-arrow-down-circle-fill"></i>
            <a
              style={styles.linkStyle}
              href="./assets/resume-arlindo-pinto.pdf"
              download
            >
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
