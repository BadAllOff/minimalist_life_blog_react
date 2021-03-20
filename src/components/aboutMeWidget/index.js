import React from "react";
import { Image, Body } from "./styles/aboutMe";

export default function AboutMe({ children }) {
  return <>{children}</>;
}

AboutMe.Image = function AboutMeImage({children, ...restProps}) {
    return <Image {...restProps} />    
}

AboutMe.Body = function AboutMeBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
}