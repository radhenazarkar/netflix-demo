import movies from "../constants/movies";
import { filterMoviesByLang } from "../utils";

import MoviesByLanguage from "./MoviesByLanguage";
import NewArrivals from "./NewArrivals";

const moviesByLanges = ["Hindi", "English", "Spanish"];

const ContentWrap = () => {
  return (
    <div className="content-wrap">
      <NewArrivals newArrivals={movies} />
      {moviesByLanges.map((lang, index) => (
        <MoviesByLanguage
          key={index}
          languageName={lang}
          movies={filterMoviesByLang(lang, movies)}
        />
      ))}
    </div>
  );
};

export default ContentWrap;
