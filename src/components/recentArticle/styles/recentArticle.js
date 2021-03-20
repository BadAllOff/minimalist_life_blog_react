import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  @media (min-width: 675px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Main = styled.div`
  order: 2;
  @media (min-width: 675px) {
    width: 68%;
  }
`;
export const Secondary = styled.div`
  order: 1;
  @media (min-width: 675px) {
    width: 30%;
  }
`;
export const Title = styled.h2`
  font-size: 1.5rem;
`;
export const Body = styled.p``;
export const Image = styled.img`
  @media (min-width: 675px) {
    order: -2;
    min-height: 250px;
    object-fit: cover;
  }
`;
export const Info = styled.p`
  margin: 2em 0;
  font-size: 0.875rem;
  @media (min-width: 675px) {
    order: -1;
  }
`;
export const Link = styled.a`
  color: #1792d2;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.125em;
  transition: letter-spacing 250ms;
  font-size: 0.875rem;
  &:hover,
  &:focus {
    color: #143774;
    text-decoration: underline;
    letter-spacing: 0.175em;
  }
`;
