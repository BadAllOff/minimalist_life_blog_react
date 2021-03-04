import React from 'react'
import Header from "../components/header";

export function HeaderContainer({children}){
    return(
        <Header.Container>
        <div className="container container-flex">
          <Header.SiteTitleContainer>
            <Header.Title>Living the social life</Header.Title>
            <Header.Subtitle>
              A blog exploring minimalism in life
            </Header.Subtitle>
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
        </div>
      </Header.Container>
    )
}