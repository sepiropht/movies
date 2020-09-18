import React, { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { movies$, Movies } from "./services/movies";
import { Category } from "./components/Category";
import { SliderButtons } from "./components/SliderButtons";
import { SetPaginationRadio } from "./components/SetPaginationRadio";

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesButton, setCategoriesButton] = useState<string[]>([]);
  const [sliderState, setSliderState] = useState<number>(0);
  const [paginationSize, setPaginationSize] = useState<number>(3);

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
    .slice(...calculIndexes(sliderState, paginationSize))
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
    <div className="container">
      <div className="App">
        <div className="cards">{CardList}</div>
        <div className="control">
          <div className="category-buttons">{CategoriesButtonList}</div>
          <SliderButtons
            onPrevClicked={() =>
              setSliderState(sliderState > 0 ? sliderState - 1 : sliderState)
            }
            onNextClicked={() => setSliderState(sliderState + 1)}
          ></SliderButtons>
          <SetPaginationRadio
            handleChange={(e) => {
              setPaginationSize(parseInt(e.target.value));
              setSliderState(0);
            }}
          ></SetPaginationRadio>
        </div>
      </div>
    </div>
  );
}

function calculIndexes(
  sliderState: number,
  paginationSize: number
): [number, number] {
  const start = sliderState * paginationSize;
  const end = start + paginationSize;
  return [start, end];
}

export default App;
