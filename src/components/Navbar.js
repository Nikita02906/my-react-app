// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Profile Mapping App</h1>
      <ul style={styles.navLinks}>
        <li><a href="#profiles" style={styles.link}>Profiles</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#6200ea',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Navbar;
