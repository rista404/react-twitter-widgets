import React from "react";
import { Timeline } from "../src";

export default {
  title: "Timeline",
  component: Timeline
};

export const ProfileBasic = () => (
  <Timeline dataSource={{ sourceType: "profile", screenName: "reactjs" }} />
);

export const ProfileSmaller = () => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: "reactjs" }}
    options={{ width: "400", height: "600" }}
  />
);

export const ProfileDarkTheme = () => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: "reactjs" }}
    options={{ theme: "dark", width: "400", height: "600" }}
  />
);

export const ProfileBorderColor = () => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: "reactjs" }}
    options={{ borderColor: "#FF0000", width: "400", height: "600" }}
  />
);

export const ProfileNoHeaderOrFooter = () => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: "reactjs" }}
    options={{ chrome: "noheader, nofooter", width: "400", height: "600" }}
  />
);

export const ProfileDoNotTrack = () => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: "reactjs" }}
    options={{ dnt: true, width: "400", height: "600" }}
  />
);

export const ProfileJapanese = () => (
  <Timeline
    dataSource={{ sourceType: "profile", screenName: "reactjs" }}
    options={{ lang: "ja", width: "400", height: "600" }}
  />
);

export const LikesBasic = () => (
  <Timeline dataSource={{ sourceType: "likes", screenName: "reactjs" }} />
);

export const ListBasic = () => (
  <Timeline
    dataSource={{
      sourceType: "list",
      ownerScreenName: "twitter",
      id: "214727905"
    }}
  />
);

export const CollectionBasic = () => (
  <Timeline
    dataSource={{ sourceType: "collection", id: "393773266801659904" }}
  />
);

export const UrlBasic = () => (
  <Timeline
    dataSource={{ sourceType: "url", url: "https://twitter.com/reactjs" }}
  />
);
