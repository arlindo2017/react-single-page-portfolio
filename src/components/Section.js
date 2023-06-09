import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Section() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const styles = {
    sectionStyle: {},
  };

  return (
    <section style={styles.sectionStyle} className="container">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </section>
  );
}
