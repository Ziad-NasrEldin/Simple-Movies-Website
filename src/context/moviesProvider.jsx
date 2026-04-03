import { useEffect, useState } from "react";
import { MoviesContext } from "./moviesContext";

const stripHtml = (text = "") => text.replace(/<[^>]+>/g, "").trim();

const getImageUrl = (image) => {
  if (typeof image === "string") {
    return image;
  }

  if (image && typeof image === "object") {
    return image.medium ?? image.original ?? null;
  }

  return null;
};

const normalizeMovie = (movie) => ({
  id: Number(movie.id),
  title: movie.title ?? movie.name ?? " ",
  year: movie.year ?? movie.premiered?.slice(0, 4) ?? "N/A",
  language: movie.language ?? "Unknown",
  genres: Array.isArray(movie.genres) ? movie.genres : [],
  rating: Number(movie.rating?.average ?? movie.rating ?? 0),
  image: getImageUrl(movie.image),
  summary: stripHtml(movie.summary ?? ""),
  runtime: Number(movie.runtime ?? 0),
  status: movie.status ?? "Unknown",
  type: movie.type ?? "N/A",
  officialSite: movie.officialSite ?? "",
});

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("https://api.tvmaze.com/shows?page=1");
        if (!response.ok) {
          throw new Error("Could not fetch movies right now.");
        }

        const data = await response.json();
        const normalized = data.slice(0, 20).map(normalizeMovie);
        setMovies(normalized);
      } catch (fetchError) {
        setError(fetchError.message || "Something went wrong while loading.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const addMovie = (moviePayload) => {
    const preparedMovie = normalizeMovie({
      ...moviePayload,
      id: Date.now(),
    });

    setMovies((prevMovies) => [preparedMovie, ...prevMovies]);
  };

  const removeMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== Number(movieId)),
    );
  };

  const updateMovie = (movieId, updatedMoviePayload) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === Number(movieId)
          ? {
              ...movie,
              ...normalizeMovie({
                ...movie,
                ...updatedMoviePayload,
                id: movie.id,
              }),
            }
          : movie,
      ),
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        error,
        addMovie,
        removeMovie,
        updateMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
