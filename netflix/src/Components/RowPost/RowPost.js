import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import Youtube from "react-youtube";

import { API_KEY, imageUrl } from "../../constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, SetUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
    autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          SetUrlId(response.data.results[0]);
        } else {
          console.log("No trailer Available");
        }
      });
  };


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      <div className="row" >
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
      </div>
    </div>
  );
}

export default RowPost;
