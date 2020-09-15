import React, { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { movies$, Movies } from "./services/movies";

function App() {
  const [movies, setMovies] = useState<Movies[]>();
  const deleteCard = (id: number) =>
    setMovies(movies?.filter((movie) => movie.id !== id));

  useEffect(() => {
    console.log("yeah");
    movies$.then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
      {movies?.map((movie) => (
        <li key={movie?.id}>
          {" "}
          <Card deleteCard={deleteCard} {...movie}></Card>
        </li>
      ))}
    </div>
  );
}

export default App;
