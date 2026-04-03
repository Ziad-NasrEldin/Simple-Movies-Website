import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import { useMovies } from "../hooks/useMovies";
import styles from "../styles/Home.module.css";

function Home() {
  const { movies, loading, error, addMovie, removeMovie } = useMovies();

  return (
    <section className={styles.page}>
      <h2>Home</h2>
      <p className={styles.subtitle}>
        Browse movies, add one, view details, or remove.
      </p>

      <MovieForm onSubmitMovie={addMovie} submitLabel="Add New Movie" />

      {loading && <p>Loading movies...</p>}
      {error && <p className={styles.errorText}>{error}</p>}

      {!loading && !error && (
        <div className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemoveMovie={removeMovie}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
