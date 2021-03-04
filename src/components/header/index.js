import React from "react";
import {
  Container,
  SiteTitleContainer,
  Title,
  Subtitle,
  Navigation,
  NavList,
  NavListItem,
  NavLink,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <></>;
}
Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.SiteTitleContainer = function HeaderSiteTitleContainer({
  children,
  ...restProps
}) {
  return <SiteTitleContainer {...restProps}>{children}</SiteTitleContainer>;
};
Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Header.Subtitle = function HeaderSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};
Header.NavList = function HeaderNavList({ children, ...restProps }) {
  return <NavList {...restProps}>{children}</NavList>;
};
Header.NavListItem = function HeaderNavListItem({ children, ...restProps }) {
  return <NavListItem {...restProps}>{children}</NavListItem>;
};
Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};
