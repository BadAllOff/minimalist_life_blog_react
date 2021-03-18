import React from "react";
import { HeaderContainer } from '../containers/header';
import { FeaturedArticleContainer } from '../containers/featuredArticle';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <div className="container container-flex">
        <main role="main">
          <FeaturedArticleContainer></FeaturedArticleContainer>
        </main>
        <aside class="sidebar"></aside>
      </div>
    </>
  );
}
