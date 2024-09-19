import movies from "../constants/movies";
import { filterMoviesByLang } from "../utils";

import MoviesByLanguage from "./MoviesByLanguage";
import NewArrivals from "./NewArrivals";

const ContentWrap = () => {
  return (
    <div className="content-wrap">
      <NewArrivals newArrivals={movies} />
      <MoviesByLanguage
        languageName="Hindi"
        movies={filterMoviesByLang("Hindi", movies)}
      />
      <MoviesByLanguage
        languageName="English"
        movies={filterMoviesByLang("English", movies)}
      />
    </div>
  );
};

export default ContentWrap;
