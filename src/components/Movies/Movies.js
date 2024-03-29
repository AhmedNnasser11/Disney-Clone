import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovies } from "../../features/movie/movieSlice";
const Movies = () => {
  
  const movies = useSelector(selectMovies);

  console.log("this is movies", movies);

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <img
                src={movie.cardImg}
                alt={movie.title}
              />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  transition: all 200ms ease-in-out;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.05);
    box-shadow: rgb(000 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
