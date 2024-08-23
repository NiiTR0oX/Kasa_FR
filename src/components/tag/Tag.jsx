import React from 'react';
import './tag.scss';
import { Link } from 'react-router-dom';

function Tag({ title }) {
  return (
    <div className='tag'>
      <h3>{title}</h3>
    </div>
  );
}

export default Tag;