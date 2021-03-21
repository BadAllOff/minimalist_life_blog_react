import React from "react";
import { HeaderContainer } from "../containers/header";
import { SidebarWidgetContainer } from "../containers/sidebarWidget";
import { RecentArticleContainer } from "../containers/recentArticle";
import { FooterContainer } from "../containers/footer";
// Widgets
import { RecentPostWidget } from "../components";
import { AboutMeWidget } from "../components";
// Fixtures
import RecentPostWidgetData from "../fixtures/recent_posts_widget.json";
import AboutMeData from "../fixtures/about_me.json";
import RecentArticlesData from "../fixtures/recent_articles.json";

export default function RecentPosts() {
  return (
    <>
      <HeaderContainer />
      <div className="container container-flex">
        <main role="main">
          {RecentArticlesData.map((article) => (
            <RecentArticleContainer key={article.id} article={article} />
          ))}
        </main>
        <aside className="sidebar">
          <SidebarWidgetContainer title="about me">
            <AboutMeWidget.Image
              src={process.env.PUBLIC_URL + AboutMeData[0].image}
              alt={AboutMeData[0].alt}
            />
            <AboutMeWidget.Body>{AboutMeData[0].body}</AboutMeWidget.Body>
          </SidebarWidgetContainer>
          <SidebarWidgetContainer title="recent posts">
            {RecentPostWidgetData.map((post) => {
              return (
                <RecentPostWidget key={post.id}>
                  <RecentPostWidget.Title>{post.title}</RecentPostWidget.Title>
                  <RecentPostWidget.Image
                    src={process.env.PUBLIC_URL + post.image}
                  ></RecentPostWidget.Image>
                </RecentPostWidget>
              );
            })}
          </SidebarWidgetContainer>
        </aside>
      </div>
      <FooterContainer />;
    </>
  );
}
