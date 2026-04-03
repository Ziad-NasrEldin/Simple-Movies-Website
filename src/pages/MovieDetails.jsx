import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieForm from "../components/MovieForm";
import { useMovies } from "../hooks/useMovies";
import styles from "../styles/MovieDetails.module.css";

function MovieDetails() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const { movies, updateMovie } = useMovies();

  const movie = useMemo(
    () => movies.find((item) => item.id === Number(id)),
    [id, movies],
  );

  if (!movie) {
    return (
      <section className={styles.page}>
        <h2>Movie Not Found</h2>
        <Link to="/" className={`${styles.btn} ${styles.primary}`}>
          Back to Home
        </Link>
      </section>
    );
  }

  const handleUpdate = (updatedData) => {
    updateMovie(movie.id, updatedData);
    setIsEditing(false);
  };

  return (
    <section className={styles.page}>
      <h2>{movie.title}</h2>
      <div className={styles.detailsLayout}>
        <img
          src={
            movie.image || "https://via.placeholder.com/350x450?text=No+Image"
          }
          alt={movie.title}
          className={styles.detailsImage}
        />
        <div className={styles.detailsContent}>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Language:</strong> {movie.language}
          </p>
          <p>
            <strong>Genres:</strong> {movie.genres.join(", ") || "N/A"}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating || "N/A"}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime || "N/A"} minutes
          </p>
          <p>
            <strong>Status:</strong> {movie.status}
          </p>
          <p>
            <strong>Type:</strong> {movie.type}
          </p>
          <p>
            <strong>Summary:</strong> {movie.summary || "No summary available."}
          </p>
          <p>
            <strong>Official Site:</strong>{" "}
            {movie.officialSite ? (
              <a
                href={movie.officialSite}
                target="_blank"
                rel="noreferrer"
                className={styles.siteLink}
              >
                Visit Website
              </a>
            ) : (
              "N/A"
            )}
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.primary}`}
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? "Cancel Update" : "Update Movie"}
            </button>
            <Link to="/" className={`${styles.btn} ${styles.secondary}`}>
              Back
            </Link>
          </div>
        </div>
      </div>

      {isEditing && (
        <MovieForm
          onSubmitMovie={handleUpdate}
          submitLabel="Save Updates"
          initialValues={movie}
        />
      )}
    </section>
  );
}

export default MovieDetails;
