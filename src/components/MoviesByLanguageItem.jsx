const MoviesByLanguageItem = (props) => {
  const { id, name, videoUrl, languages, screenTime, thumbnailUrl } = props;

  return (
    <div className="new-arrival-movie-item">
      <img src={thumbnailUrl} alt={name} />
      <div className="movie-name">{name}</div>
      <div className="screen-time">{screenTime} hr</div>
    </div>
  );
};

export default MoviesByLanguageItem;
