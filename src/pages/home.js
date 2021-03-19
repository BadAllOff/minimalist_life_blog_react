import React from "react";
import { HeaderContainer } from '../containers/header';
import { FeaturedArticleContainer } from '../containers/featuredArticle';
import FeaturedArticleData from "../fixtures/featured_article.json";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <div className="container container-flex">
        <main role="main">
          <FeaturedArticleContainer article={FeaturedArticleData[0]} />
        </main>
        <aside className="sidebar"></aside>
      </div>
    </>
  );
}
