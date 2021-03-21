import React from "react";

import { Widget } from "../components";

export function SidebarWidgetContainer({ children, title = "" }) {
  return (
    <Widget>
      <Widget.Title>{title}</Widget.Title>
      {children}
    </Widget>
  );
}

SidebarWidgetContainer.defaultProps = {
  title: "Provide title for sidebar widget component",
};
