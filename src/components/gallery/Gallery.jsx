import React from 'react';
import './gallery.scss';

const Gallery = ({ locations }) => {
  return (
    <div className="gallery">
      {locations.slice(0, 6).map((location) => (
        <div className="gallery-block" key={location.id}>
          <div className="gallery-block-content">
            <h2>{location.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;