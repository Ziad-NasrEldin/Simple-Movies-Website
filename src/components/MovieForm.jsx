import { useState } from "react";
import styles from "../styles/MovieForm.module.css";

const INITIAL_FORM_STATE = {
  title: "",
  year: "",
  language: "",
  genres: "",
  rating: "",
  image: "",
  summary: "",
  runtime: "",
  status: "",
  type: "",
  officialSite: "",
};

const buildFormState = (initialValues) => {
  if (!initialValues) {
    return INITIAL_FORM_STATE;
  }

  return {
    title: initialValues.title ?? "",
    year: initialValues.year ?? "",
    language: initialValues.language ?? "",
    genres: Array.isArray(initialValues.genres)
      ? initialValues.genres.join(", ")
      : (initialValues.genres ?? ""),
    rating: initialValues.rating ?? "",
    image: initialValues.image ?? "",
    summary: initialValues.summary ?? "",
    runtime: initialValues.runtime ?? "",
    status: initialValues.status ?? "",
    type: initialValues.type ?? "",
    officialSite: initialValues.officialSite ?? "",
  };
};

function MovieForm({ onSubmitMovie, submitLabel, initialValues }) {
  const [formData, setFormData] = useState(() => buildFormState(initialValues));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onSubmitMovie({
      ...formData,
      genres: formData.genres
        .split(",")
        .map((genre) => genre.trim())
        .filter(Boolean),
      rating: Number(formData.rating || 0),
      runtime: Number(formData.runtime || 0),
    });

    if (!initialValues) {
      setFormData(INITIAL_FORM_STATE);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>{submitLabel}</h2>
      <div className={styles.formGrid}>
        <input
          className={styles.input}
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Movie title"
          required
        />
        <input
          className={styles.input}
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
        />
        <input
          className={styles.input}
          name="language"
          value={formData.language}
          onChange={handleChange}
          placeholder="Language"
        />
        <input
          className={styles.input}
          name="genres"
          value={formData.genres}
          onChange={handleChange}
          placeholder="Genres (comma separated)"
        />
        <input
          className={styles.input}
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating"
        />
        <input
          className={styles.input}
          name="runtime"
          type="number"
          min="0"
          value={formData.runtime}
          onChange={handleChange}
          placeholder="Runtime (minutes)"
        />
        <input
          className={styles.input}
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
        />
        <input
          className={styles.input}
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type"
        />
        <input
          className={styles.input}
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Poster URL"
        />
        <input
          className={styles.input}
          name="officialSite"
          value={formData.officialSite}
          onChange={handleChange}
          placeholder="Official website"
        />
      </div>
      <textarea
        className={styles.textarea}
        name="summary"
        value={formData.summary}
        onChange={handleChange}
        placeholder="Movie summary"
        rows="4"
      />
      <button type="submit" className={`${styles.btn} ${styles.primary}`}>
        {submitLabel}
      </button>
    </form>
  );
}

export default MovieForm;
