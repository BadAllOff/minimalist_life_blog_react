import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Article = styled.article`
  border-bottom: #707070 1px solid;
  padding-bottom: 2em;
  margin-bottom: 2em;

  @media (min-width: 675px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  font-size: 1.5rem;
`;
export const Img = styled.img`
  @media (min-width: 675px) {
    order: -2;
    min-height: 250px;
    object-fit: cover;
  }
`;
export const Info = styled.p`
  font-size: 0.875rem;
  margin: 2em 0;
  @media (min-width: 675px) {
    order: -1;
  }
`;
export const Body = styled.p``;
export const Link = styled(ReachRouterLink)`
  color: #1792d2;
  text-decoration: none;
  font-weight: 700;
  font-size: .875rem;
  letter-spacing: 0.125em;
  transition: letter-spacing 250ms;
  &:focus,
  &:hover {
    color: #143774;
    text-decoration: underline;
    letter-spacing: 0.175em;
  }
`;
