import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <h1>About Page</h1>
  </>
);

export default AboutPage;
