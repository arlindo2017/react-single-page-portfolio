import React from "react";

const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.8",
    color: "white",
    paddingBottom: "50px",
  },
};

export default function Resume() {
  return (
    <div>
      <div className="card" style={styles.cardBodyStyle}>
        <h4 className="card-header">Resume</h4>
        <div className="card-body">
          <p>
            As a student of the Rutgers Bootcamp in Full Stack Web Development,
            I am eager to apply my new skills and knowledge to a challenging
            position in the tech industry. Over the course of the program, I
            gained expertise in several key areas, including HTML, CSS,
            JavaScript, React.js, Node.js, and MongoDB. Additionally, I
            developed strong problem-solving and collaboration skills through
            working on team projects and completing individual assignments.
          </p>
          <p>
            Prior to enrolling in the bootcamp, I was a business analyst for the
            last 8 years
          </p>
          <p>
            I am excited to continue learning and growing in the tech industry,
            and I believe that my combination of technical skills and
            collaborative mindset make me a strong candidate for any software
            development position. Please do not hesitate to reach out to me if
            you would like to discuss my qualifications further. Thank you for
            considering my application.
          </p>
        </div>
      </div>
    </div>
  );
}
