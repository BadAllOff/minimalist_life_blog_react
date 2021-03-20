import React from "react";
import {
  Container,
  Main,
  Secondary,
  Title,
  Body,
  Image,
  Info,
  Link,
} from "./styles/recentArticle";

export default function RecentArticle({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

RecentArticle.Main = function RecentArticleMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

RecentArticle.Secondary = function RecentArticleSecondary({
  children,
  ...restProps
}) {
  return <Secondary {...restProps}>{children}</Secondary>;
};

RecentArticle.Title = function RecentArticleTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

RecentArticle.Body = function RecentArticleBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

RecentArticle.Image = function RecentArticleImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

RecentArticle.Info = function RecentArticleInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

RecentArticle.Link = function RecentArticleLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
