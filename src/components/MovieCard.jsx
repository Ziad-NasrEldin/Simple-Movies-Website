import { Link } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";

function MovieCard({ movie, onRemoveMovie }) {
  return (
    <article className={styles.card}>
      <img
        src={movie.image || "https://via.placeholder.com/300x400?text=No+Image"}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.cardBody}>
        <h3>{movie.title}</h3>
        <p>Year: {movie.year}</p>
        <p>Language: {movie.language}</p>
        <div className={styles.actions}>
          <Link
            to={`/movies/${movie.id}`}
            className={`${styles.btn} ${styles.primary}`}
          >
            Details
          </Link>
          <button
            type="button"
            className={`${styles.btn} ${styles.danger}`}
            onClick={() => onRemoveMovie(movie.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
