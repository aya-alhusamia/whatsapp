import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #f1f3f5;
}
`;
export const Navtitle = styled.a`
  color: #f8f9fa;
  font-size: 23px;
`;
export const UserForm = styled.form`
  //   width: 500px;
  padding: 56px;
  padding-top: 50px;
  padding-bottom: 80px;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  background: #e9ecef;
  text-align: center;
  //   transition: 0.25s;
  //   margin-top: 100px;
`;

export const Carousel = styled.div`
  .carousel .item {
    height: 300px;
  }

  .item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 300px;
  }
`;
export const GymImg = styled.img`
  width: 100%;

  padding-top: 10px;
  padding-bottom: -100px;
`;

export const CardBody = styled.div`
  text-align: left;
  margin-left: 95px;
`;
export const NavList = styled(NavLink)`
  font-size: 25px;
  margin-top: 15px;
  padding-right: 25px;
  color: orange;
  &.active {
    color: Red;
    font-weight: bold;
  }
`;
export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Navitem = styled(NavLink)`
  // color: white;
  padding: 0.2em 1em;
  // font-size: 18px;
  text-decoration: none !important;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Error = styled.p`
  color: red;
`;

export const Subheading = styled.p`
  text-align: center;
  color: blue;
  margin-top: 200px;
`;
