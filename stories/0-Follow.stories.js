import React from "react";
import { Follow } from "../src";

export default {
  title: "Follow",
  component: Follow
};

export const Basic = () => <Follow username="reactjs" />;

export const Large = () => (
  <Follow username="reactjs" options={{ size: "large" }} />
);

export const Japanese = () => (
  <Follow username="reactjs" options={{ lang: "ja" }} />
);

export const DoNotTrack = () => (
  <Follow username="reactjs" options={{ dnt: true }} />
);
