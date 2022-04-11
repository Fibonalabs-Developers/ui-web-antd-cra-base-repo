import { Link } from 'react-router-dom';

function AboutPage() {
  return (
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
}

export default AboutPage;
