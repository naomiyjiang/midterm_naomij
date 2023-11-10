//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";

function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright ⓒ {currentyear} </p>
    </footer>
  );
}

export default Footer;
