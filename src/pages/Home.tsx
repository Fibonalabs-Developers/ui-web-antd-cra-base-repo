import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDummyList } from 'src/api/demo';

const HomePage = () => {
  const { data } = useDummyList();

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
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Button type="primary">Primary</Button>
      <ul>
        {data?.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
