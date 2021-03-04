import styled from "styled-components";

export const SiteTitleContainer = styled.div``;
export const Title = styled.h1``;
export const Subtitle = styled.p`
  font-weight: 700;
  color: #1792d2;
  font-size: 0.75rem;
  margin: 0;
  text-transform: uppercase;
`;
export const Navigation = styled.nav``;
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;
export const NavListItem = styled.li`
  margin-left: 2em;
  @media (max-width: 675px) {
    margin: 0.5em 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  color: #707070;
  font-weight: 700;
  padding: 0.25em 0;
  transition: color 0.5s;

  :focus,
  :hover {
    color: #1792d2;
    cursor: pointer;
  }
`;

export const Container = styled.header`
  background: #f8f8f8;
  padding: 2em 0;
  text-align: center;
  margin-bottom: 3em;
  color: rgba(255, 255, 255, 0.65);

  @media (min-width: 675px) {
    text-align: left;
  }
`;
