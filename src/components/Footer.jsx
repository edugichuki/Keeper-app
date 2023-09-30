import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} Gichuki • Built with React</p>
    </footer>
  );
}

export default Footer;
