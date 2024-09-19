import MoviesByLanguageItem from "./MoviesByLanguageItem";

const MoviesByLanguage = (props) => {
  const { languageName, movies } = props;

  return (
    <section className="new-arriavals-section">
      <div className="header-1">{languageName}</div>
      <div className="new-arrivals-wrap">
        {movies.map((movie) => (
          <MoviesByLanguageItem key={movie} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesByLanguage;
