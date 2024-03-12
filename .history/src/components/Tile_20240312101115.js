import React from 'react';

const Tile = ({ title, content, size }) => {
  const tileClass = size === 'large' ? 'large-tile' : 'small-tile';

  return (
    <div className={tileClass}>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
};

export default Tile;