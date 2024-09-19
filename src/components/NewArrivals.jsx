import NewArrivalMovieItem from "./NewArrivalMovieItem";

const NewArrivals = (props) => {
  const { newArrivals } = props;

  return (
    <section className="new-arriavals-section">
      <div className="header-1">New Arrivals</div>
      <div className="new-arrivals-wrap">
        {newArrivals.map((movie) => (
          <NewArrivalMovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
