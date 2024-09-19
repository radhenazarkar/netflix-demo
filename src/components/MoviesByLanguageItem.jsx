const MoviesByLanguageItem = (props) => {
  const { name, videoUrl, screenTime, thumbnailUrl } = props;

  const handleClick = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="new-arrival-movie-item" onClick={handleClick}>
      <img src={thumbnailUrl} alt={name} />
      <div className="movie-name">{name}</div>
      <div className="screen-time">{screenTime} hr</div>
    </div>
  );
};

export default MoviesByLanguageItem;
