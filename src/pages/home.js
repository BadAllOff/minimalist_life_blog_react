import React from "react";
import { HeaderContainer } from "../containers/header";
import { FeaturedArticleContainer } from "../containers/featuredArticle";
import { SidebarWidgetContainer } from "../containers/sidebarWidget";
import RecentPostWidget from "../components/recentPostWidget";
import AboutMeWidget from "../components/aboutMeWidget";
import FeaturedArticleData from "../fixtures/featured_article.json";
import RecentPostWidgetData from "../fixtures/recent_posts_widget.json";
import AboutMeData from "../fixtures/about_me.json";

export default function Home() {
  console.log(AboutMeData)
  return (
    <>
      <HeaderContainer />
      <div className="container container-flex">
        <main role="main">
          <FeaturedArticleContainer article={FeaturedArticleData[0]} />
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
