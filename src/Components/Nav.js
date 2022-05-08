import React, { useContext } from "react";
import "./nav.css";
import { MovieContext } from "../MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <h1>Chidi</h1>
        <p>List of Movies: {movies.length}</p>
      </div>
    </div>
  );
};

export default Nav;
