import { useContext } from "react";
import { MoviesContext } from "../context/moviesContext";

export function useMovies() {
  const contextValue = useContext(MoviesContext);

  if (!contextValue) {
    throw new Error("Error:failed to find movies context value");
  }

  return contextValue;
}
