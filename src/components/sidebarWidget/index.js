import React from "react";
import { Container, Title } from "./styles/sidebarWidget";

export default function SidebarWidget({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SidebarWidget.Title = function SidebarWidgetTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};
