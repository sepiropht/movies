import React, { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { movies$, Movies } from "./services/movies";
import { Category } from "./components/Category";

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);

  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesButton, setCategoriesButton] = useState<string[]>([]);

  const toggleCategory = (selectedCategory: string) => {
    if (categories.includes(selectedCategory)) {
      setCategories(
        categories.filter((category) => category !== selectedCategory)
      );
    } else {
      setCategories([...categories, selectedCategory]);
    }
  };
  const deleteCard = (id: number) =>
    setMovies(movies.filter((movie) => movie.id !== id));

  const CategoriesButtonList = categoriesButton.map((category) => (
    <Category category={category} onCategoryClick={toggleCategory} />
  ));

  const CardList = movies
    .filter(
      (movie) => categories.includes(movie.category) || !categories.length
    )
    .map((movie) => (
      <li key={movie?.id}>
        {" "}
        <Card onCardClick={deleteCard} {...movie}></Card>
      </li>
    ));

  useEffect(() => {
    movies$.then((data) => {
      setMovies(data);
    });
  }, []);

  useEffect(() => {
    setCategoriesButton([...new Set(movies.map((movie) => movie.category))]);
    if (!movies.length) {
      movies$.then((data) => {
        setMovies(data);
      });
    }
  }, [movies]);

  return (
    <div className="App">
      {CardList}
      <div>{CategoriesButtonList}</div>
    </div>
  );
}

export default App;
