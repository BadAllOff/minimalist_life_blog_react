import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #707070;
  margin-bottom: 1em;
  &:last-child {
    border: 0;
    margin: 0;
  }
`;
export const Title = styled.h3`
  font-size: 1rem;
  line-height: 1;
  color: #143774;
`;
export const Image = styled.img`
  order: -1;
`;
