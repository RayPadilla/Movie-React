import React, { Component, useState } from "react";
import Popup from "reactjs-popup";

const IMG_API = "https://image.tmdb.org/t/p/w1280/";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const togglePopup = () => {};

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => (
  <div className="movie">
    <Popup
      trigger={<input className="movie-b" type="button" value="More" />}
      position="top"
    >
      <div className="pbox">
        <div className="bbox">
          <img className="pimg" src={IMG_API + poster_path} alt={title} />
          <div className="pinfo">
            <h3 className="ptitle"> {title} </h3>
            <p className="pover">{overview}</p>
            <div className="pextra">
              <p>TMDB Rating: {vote_average}</p>
              <p className="rd">Release Date: {release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </Popup>

    <img src={IMG_API + poster_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
  </div>
);

export default Movie;
