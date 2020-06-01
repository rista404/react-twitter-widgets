import React from "react";
import { Mention } from "../src";

export default {
  title: "Mention",
  component: Mention
};

export const Basic = () => <Mention username="reactjs" />;

export const DefaultText = () => (
  <Mention username="reactjs" options={{ text: "DEFAULT TEXT" }} />
);

export const DefaultHashtags = () => (
  <Mention username="reactjs" options={{ hashtags: "clojure,reactjs" }} />
);

export const Large = () => (
  <Mention username="reactjs" options={{ size: "large" }} />
);

export const Japanese = () => (
  <Mention username="reactjs" options={{ lang: "ja" }} />
);

export const DoNotTrack = () => (
  <Mention username="reactjs" options={{ dnt: true }} />
);
