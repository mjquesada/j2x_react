import React from 'react';

const Box = ({ title, content }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Box;