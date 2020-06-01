import React from "react";
import { Share } from "../src";

export default {
  title: "Share",
  component: Share
};

export const Basic = () => <Share url="https://andrewsuzuki.com" />;

export const DefaultText = () => (
  <Share url="https://andrewsuzuki.com" options={{ text: "DEFAULT TEXT" }} />
);

export const DefaultHashtags = () => (
  <Share
    url="https://andrewsuzuki.com"
    options={{ hashtags: "clojure,reactjs" }}
  />
);

export const Large = () => (
  <Share url="https://andrewsuzuki.com" options={{ size: "large" }} />
);

export const Japanese = () => (
  <Share url="https://andrewsuzuki.com" options={{ lang: "ja" }} />
);

export const DoNotTrack = () => (
  <Share url="https://andrewsuzuki.com" options={{ dnt: true }} />
);
