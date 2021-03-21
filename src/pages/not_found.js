import React from "react";
import { HeaderContainer } from "../containers/header";

export default function NotFound() {
  return (
    <>
      <HeaderContainer />
      <div className="container">
        <h1>404 Not Found</h1>
        <h3>Sorry, we couldn't find the page you were looking for...</h3>
        <h4>Here are some tips to get you back on your way</h4>
        <p>
          If you followed a link, it's probably broken. Please contact us and
          we'll fix it.
        </p>
        <p>If you typed in the address, please check your spelling.</p>
        <p>
          If you're not sure what you're looking for, start at the home page.
        </p>
      </div>
    </>
  );
}
