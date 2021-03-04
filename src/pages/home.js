import React from "react";
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <div className="container container-flex">
        <main role="main"></main>
      </div>
    </>
  );
}
