import React from "react";
import ReactHtmlParser from "react-html-parser";
import { FeaturedArticle } from "../components";

export function FeaturedArticleContainer({ article }) {
  return (
    <FeaturedArticle>
      <FeaturedArticle.Title>{article.title}</FeaturedArticle.Title>
      <FeaturedArticle.Img
        src={process.env.PUBLIC_URL + article.image}
        alt={article.alt}
      ></FeaturedArticle.Img>
      <FeaturedArticle.Info>
        {article.date} | {article.comments_count} comments
      </FeaturedArticle.Info>
      <FeaturedArticle.Body>
        {ReactHtmlParser(article.body)}
      </FeaturedArticle.Body>
      <FeaturedArticle.Link to={<></>}>CONTINUE READING</FeaturedArticle.Link>
    </FeaturedArticle>
  );
}
