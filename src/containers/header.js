import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";

export function HeaderContainer({ children }) {
  return (
    <Header.Container>
      <div className="container container-flex">
        <Header.SiteTitleContainer>
          <Header.Title>Living the social life</Header.Title>
          <Header.Subtitle>A blog exploring minimalism in life</Header.Subtitle>
        </Header.SiteTitleContainer>
        <Header.Navigation>
          <Header.NavList>
            <Header.NavListItem>
              <Header.NavLink
                to={ROUTES.HOME}
                exact
                activeClassName="current-page"
              >
                Home
              </Header.NavLink>
            </Header.NavListItem>
            <Header.NavListItem>
              <Header.NavLink
                to={ROUTES.ABOUT_ME}
                activeClassName="current-page"
              >
                About me
              </Header.NavLink>
            </Header.NavListItem>
            <Header.NavListItem>
              <Header.NavLink
                to={ROUTES.RECENT_POSTS}
                activeClassName="current-page"
              >
                Recent posts
              </Header.NavLink>
            </Header.NavListItem>
          </Header.NavList>
        </Header.Navigation>
      </div>
    </Header.Container>
  );
}
