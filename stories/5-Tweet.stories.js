import React from "react";
import { Tweet } from "../src";

export default {
  title: "Tweet",
  component: Tweet
};

export const Basic = () => <Tweet tweetId="841418541026877441" />;

export const Smaller = () => (
  <Tweet tweetId="841418541026877441" options={{ width: "200" }} />
);

export const AlignRight = () => (
  <Tweet
    tweetId="841418541026877441"
    options={{ align: "right", width: "200" }}
  />
);

export const DarkTheme = () => (
  <Tweet tweetId="841418541026877441" options={{ theme: "dark" }} />
);
