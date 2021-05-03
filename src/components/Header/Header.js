import styled from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>original</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="https://scontent.fcai19-1.fna.fbcdn.net/v/t31.18172-1/p200x200/16178427_2064789600414017_6414115046343315749_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=gWMdqwnYMlsAX-qO0Oz&_nc_ht=scontent.fcai19-1.fna&tp=6&oh=b3c018ac69b32b310699566667576741&oe=60B63BC2" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background: #090b13;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  cursor: pointer;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 1px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all .3s ease-in-out;
      }
    }
    &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
          transition: all .3s ease-in-out;
        }
      }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
