import React from "react";
// Custom CSS Style
const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.9",
    color: "white",
    paddingBottom: "50px",
  },
};

export default function About() {
  return (
    <div className="card" style={styles.cardBodyStyle}>
      <h4 className="card-header">About me</h4>
      <div className="card-body">
        <img
          className="img-thumbnail"
          src="./assets/img/profile.jpg"
          alt="My Profile"
        />
        <hr />
        <p>
          As a beginner web developer, I am excited to begin my journey in the
          development field where I hope to apply some of my previous experience
          as a Business Analyst. I am currently enrolled in the Rutgers coding
          bootcamp, where I have been learning HTML, CSS, and other web
          development tools. I have been applying these skills in class
          mini-projects and weekly challenges. I am a quick learner and highly
          motivated, and I am looking forward to learning new skills as the
          Rutgers bootcamp continues.
        </p>
      </div>
    </div>
  );
}
