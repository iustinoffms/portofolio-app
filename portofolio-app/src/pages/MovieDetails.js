import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieState } from "../movieState";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(...currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </StyledAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const Award = ({ award }) => {
  return (
    <StyledAward>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </StyledAward>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    min-height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  color: white;
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.3rem;
    background-color: #23d997;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetails;
