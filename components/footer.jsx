// src/components/Footer.jsx
//import React from 'react';

function Footer() {

 const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '10px', textAlign: 'center', background: '#f8f9fa', marginTop:'60px' }}>
      <p>© {currentYear} Snapspace. All rights reserved.</p>
      </footer>
  );
}

export default Footer;
