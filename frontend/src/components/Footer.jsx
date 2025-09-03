import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <p>© 2025 VY Software Company. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '0.5rem',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
