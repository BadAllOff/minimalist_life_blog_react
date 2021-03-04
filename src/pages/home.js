import React from "react";
import Header from "../components/header";

export default function Home() {
  return (
    <Header.HeaderDiv>
      <Header.Container>
        <Header.SiteTitleContainer>
          <Header.Title>Living the social life</Header.Title>
          <Header.Subtitle>A blog exploring minimalism in life</Header.Subtitle>
        </Header.SiteTitleContainer>
        <Header.Navigation>
          <Header.NavList>
            <Header.NavListItem>
              <Header.NavLink>Home</Header.NavLink>
            </Header.NavListItem>
            <Header.NavListItem>
              <Header.NavLink>About me</Header.NavLink>
            </Header.NavListItem>
            <Header.NavListItem>
              <Header.NavLink>Recent posts</Header.NavLink>
            </Header.NavListItem>
          </Header.NavList>
        </Header.Navigation>
      </Header.Container>
    </Header.HeaderDiv>
  );
}
