import React from "react";

const styles = {
  footerStyle: {
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222831",
    opacity: "0.9",
    borderRadius: " 5px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  linkStyle: {
    padding: "0px 10px 0px  10px ",
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
  },
};
function Footer() {
  return (
    <footer className="footer container">
      <div style={styles.footerStyle}>
        <a style={styles.linkStyle} href="https://github.com/arlindo2017 ">
          <i className="bi-github contact-me-icons"></i>
        </a>
        <a style={styles.linkStyle} href="https://linkedin.com">
          <i className="bi bi-linkedin"></i>
        </a>
        <a style={styles.linkStyle} href="https://twitter.com/Arlindo23636263">
          <i className="bi-twitter contact-me-icons"></i>
        </a>
        <a style={styles.linkStyle} href="mailto:perensen@gmail.com">
          <i className="bi-envelope-at contact-me-icons"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
