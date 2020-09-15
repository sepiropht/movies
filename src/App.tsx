import React, { useState, useEffect } from "react";
import "./App.css";
import { CardProps, Card } from "./components/Card";
import { movies$ } from "./services/movies";

function App() {
  const [movies, setMovies] = useState<CardProps[]>();
  useEffect(() => {
    movies$.then((data) => setMovies(data));
  });
  return (
    <div className="App">
      {movies?.map((movie) => (
        <li key={movie?.id}>
          {" "}
          <Card {...movie}></Card>
        </li>
      ))}
    </div>
  );
}

export default App;
