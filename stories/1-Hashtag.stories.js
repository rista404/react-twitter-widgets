import React from "react";
import { Hashtag } from "../src";

export default {
  title: "Hashtag",
  component: Hashtag
};

export const Basic = () => <Hashtag hashtag="reactjs" />;

export const Large = () => (
  <Hashtag hashtag="reactjs" options={{ size: "large" }} />
);

export const Japanese = () => (
  <Hashtag hashtag="reactjs" options={{ lang: "ja" }} />
);

export const DoNotTrack = () => (
  <Hashtag hashtag="reactjs" options={{ dnt: true }} />
);
