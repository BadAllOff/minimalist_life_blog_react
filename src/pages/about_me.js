import React from "react";
import { HeaderContainer } from "../containers/header";
import { SidebarWidgetContainer } from "../containers/sidebarWidget";
import RecentPostWidget from "../components/recentPostWidget";
import RecentPostWidgetData from "../fixtures/recent_posts_widget.json";
import FooterContainer from "../containers/footer";

export default function AboutMe() {
  return (
    <>
      <HeaderContainer />
      <div class="container container-flex">
        <main role="main">
          <img
            src={process.env.PUBLIC_URL + "/images/about-me.jpg"}
            class="image-full"
          />
          <h2>My name is U and living the simple life saved my life</h2>
          <p>
            <strong>Far far away, behind the word mountains,</strong> far from
            the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <h3>>Even the all-powerful</h3>
          <p>
            <strong>Even the all-powerful Pointing has no control</strong> about
            the blind texts it is an almost unorthographic life One day however
            a small line of blind text by the name of Lorem Ipsum decided to
            leave for the far World of Grammar.
          </p>
          <p>
            It wasn't easy at all, but everything around me was in such a bad
            place, I didn't know what else to do. And it worked.
          </p>

          <h3>>Alphabet Village and the subline</h3>
          <p>
            Now that I'm living a simple life, things are so much better. I'm
            less stressed, enjoy life and work more, and I have more free time
            to enjoy.
          </p>
          <p>
            With how much it turned my life around,
            <strong>
              I felt like I had no choice but to start sharing how I did it
            </strong>
            , and how others can benefit from living a simple life as well,
            which is why I started this site!
          </p>
        </main>
        <aside className="sidebar">
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
      <FooterContainer />
    </>
  );
}
