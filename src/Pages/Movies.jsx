import React from "react";
import Card from "../Components/Card";
import Movie from "../Data/Movie";

const Movies = () => {
  return (
    <>
      <div className="app-container">
        {Movie.map((item, i) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              release={item.release}
              director={item.director}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Movies;
