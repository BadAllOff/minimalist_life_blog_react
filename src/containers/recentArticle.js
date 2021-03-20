import React from "react";

import RecentArticle from "../components/recentArticle";

export default function RecentArticleContainer({ article }) {
  return (
    <RecentArticle key={article.id}>
      <RecentArticle.Main>
        <RecentArticle.Title>{article.title}</RecentArticle.Title>
        <RecentArticle.Body>{article.body}</RecentArticle.Body>
        <RecentArticle.Link>CONTINUE READING</RecentArticle.Link>
      </RecentArticle.Main>
      <RecentArticle.Secondary>
        <RecentArticle.Image
          src={process.env.PUBLIC_URL + article.image}
          alt={article.alt}
        />
        <RecentArticle.Info>
          {article.date} | {article.comments_count} comments
        </RecentArticle.Info>
      </RecentArticle.Secondary>
    </RecentArticle>
  );
}
