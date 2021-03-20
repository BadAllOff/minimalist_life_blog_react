import React from "react";
import { HeaderContainer } from "../containers/header";
import { FeaturedArticleContainer } from "../containers/featuredArticle";
import { SidebarWidgetContainer } from "../containers/sidebarWidget";
import RecentPostWidget from "../components/recentPostWidget";
import FeaturedArticleData from "../fixtures/featured_article.json";
import RecentPostWidgetData from "../fixtures/recent_posts_widget.json";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <div className="container container-flex">
        <main role="main">
          <FeaturedArticleContainer article={FeaturedArticleData[0]} />
        </main>
        <aside className="sidebar">
          <SidebarWidgetContainer title="RECENT POSTS">
            {RecentPostWidgetData.map((post) => {
              return (
                <RecentPostWidget>
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
    </>
  );
}
