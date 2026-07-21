import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: '#1f2937',
      borderTop: '2px solid rgba(255, 255, 255, 0.05)',
      padding: '40px 40px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ color: '#fffdf2', marginBottom: '10px' }}>Bazario</h3>
          <p style={{ color: '', fontSize: '1.2rem' }}>Premium E-Commerce Platform.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/about" style={{ color: '#fffdf2', fontSize: '1.1rem' }}>About Us</Link>
          <Link to="/return" style={{ color: '#fffdf2', fontSize: '1.1rem' }}>Return Policy</Link>
          <Link to="/disclaimer" style={{ color: '#fffdf2', fontSize: '1.1rem' }}>Disclaimer</Link>
        </div>
        
        <div style={{ color: '#fffdf2', fontSize: '1.2rem' }}>
          &copy; {new Date().getFullYear()} Bazario. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
