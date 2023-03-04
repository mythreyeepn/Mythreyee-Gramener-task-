import React, { useState } from 'react';
import './style.css';

import Movie from './Movie';

export default function App() {
  let data = [
    {
      name: 'Dexter',
      language: 'English',
      year: '1996',
    },
    {
      name: 'Shark',
      language: 'English',
      year: '1993',
    },
    {
      name: 'Top Gun',
      language: 'English',
      year: '1998',
    },

    {
      name: 'Titanic',
      language: 'English',
      year: '2000',
    },
    {
      name: 'RRR',
      language: 'Telugu',
      year: '2022',
    },
    {
      name: 'Ferry',
      language: 'English',
      year: '2023',
    },
    {
      name: 'Cast away',
      language: 'English',
      year: '1991',
    },

    {
      name: 'Twilight',
      language: 'English',
      year: '2008',
    },
    {
      name: 'Devi wears Prada',
      language: 'Telugu',
      year: '1998',
    },
    {
      name: 'Avatar',
      language: 'English',
      year: '2000',
    },
  ];
  const [searchText, setSearch] = useState('');
  const [movies, setMovies] = useState(data);

  const searchHandle = () => {
    if (searchText && searchText.trim().length > 0) {
      const temp = [...data];
      let tempArray = [];
      for (var i = 0; i < temp.length; i++) {
        if (temp[i].year.includes(searchText)) {
          tempArray.push(temp[i]);
        }
      }
      setMovies(tempArray);
    } else {
      setMovies(data);
    }
  };

  const handleOnchange = (e) => {
    if (e.target.value && e.target.value.length > 0) {
      setSearch(e.target.value);
    } else {
      setSearch('');
      setMovies(data);
    }
  };
  return (
    <>
      <input
        type="text"
        value={searchText}
        placeholder="year of release"
        onChange={handleOnchange}
      />
      <button onClick={searchHandle}> Search </button>
      <div className="container">
        {movies.map((movie) => {
          return <Movie data={movie} />;
        })}
      </div>
    </>
  );
}
