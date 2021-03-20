import React from "react";

import SidebarWidget from "../components/sidebarWidget";

export function SidebarWidgetContainer({children, title=""}) {
  return (
    <SidebarWidget>
      <SidebarWidget.Title>{title}</SidebarWidget.Title>
      {children}
    </SidebarWidget>
  )
}

SidebarWidgetContainer.defaultProps ={
  title: 'Provide title for sidebar widget component'
}