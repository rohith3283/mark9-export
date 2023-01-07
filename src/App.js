import React from "react";
import "./styles.css";
import { useState } from "react";

const musicalGenres = {
  love: [
    {
      name: "oh sita",
      movie: "movie -- sitaramam",
      rating: "4.9/5"
    },
    {
      name: "po ve po ",
      movie: "movie -- 3",
      rating: "5/5"
    },
    {
      name: " chal chal re",
      movie: "movie -- happy",
      rating: "5/5"
    }
  ],

  sad: [
    {
      name: "e gayam",
      movie: "movie -- parugu",
      rating: "4.8/5"
    },
    {
      name: "chanchala",
      movie: "movie -- surya s/o krishna",
      rating: "5/5"
    }
  ],

  hipHop: [
    {
      name: "Ik Vaari Aa",
      movie: "movie -- raabta",
      rating: "4..8/5"
    },
    {
      name: "Swag Se Swagat",
      movie: "movie -- tiger",
      rating: "4.5/5"
    }
  ]
};

var genre = Object.keys(musicalGenres);
console.log(genre);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("hipHop");
  function clickHandler(genre) {
    // console.log(genre);
    setSelectedGenre(genre);
  }
  // {bookDB[selectedGenre].map((book)
  return (
    <div className="App">
      <h1 className="heading"> good♪music </h1>
      {/* <hr /> */}
      <div>
        {genre.map((genre) => (
          <button
            onClick={() => {
              clickHandler(genre);
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div className="container">
        <ul>
          {musicalGenres[selectedGenre].map((song) => (
            <li key={song.rating}>
              <p className="name">{song.name} </p>
              <p className="movie">{song.movie} </p>
              <p className="rating">{song.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
