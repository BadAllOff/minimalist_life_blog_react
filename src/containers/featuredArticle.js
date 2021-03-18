import React from "react";
import FeaturedArticle from "../components/featuredArticle";

export function FeaturedArticleContainer({ children }) {
  return (
    <FeaturedArticle>
      <FeaturedArticle.Title>Lorem ipsum dolor sit amet.</FeaturedArticle.Title>
      <FeaturedArticle.Img
        src={process.env.PUBLIC_URL + "/images/minimalizm.jpg"}
      ></FeaturedArticle.Img>
      <FeaturedArticle.Info>March 18 2021 | 12 comments</FeaturedArticle.Info>
      <FeaturedArticle.Body>
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </strong>
        Nemo, sequi obcaecati. Similique mollitia{" "}
        <a href="#">blanditiis quasi?</a> Sequi vitae qui labore, culpa,
        perspiciatis ipsa sapiente eveniet ex ea expedita eum commodi nostrum.
      </FeaturedArticle.Body>
      <FeaturedArticle.Link to={<></>}>CONTINUE READING</FeaturedArticle.Link>
    </FeaturedArticle>
  );
}
