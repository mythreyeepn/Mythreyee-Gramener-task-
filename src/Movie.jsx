import React from 'react';

const Movie = (props) => {
  return (
      <div className="card">
      <h3> {props.data.name}</h3>
       <span> {props.data.language}</span>
      </div>

  );
};

export default Movie;
