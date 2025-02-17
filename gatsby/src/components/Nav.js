import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid var(--red);
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 2rem;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
    transition: 0.3s;
    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
    &:hover {
      color: var(--red);
    }
    &[aria-current="page"] {
      font-weight: 700;
      color: var(--red);
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <h1>Good Goods</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stuff">Goods</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
