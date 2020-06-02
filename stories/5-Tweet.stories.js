import React from "react";
import { Tweet } from "../src";

export default {
  title: "Tweet",
  component: Tweet
};

export const Basic = () => <Tweet tweetId="841418541026877441" />;

export const TweetLoadingError = () => (
  <Tweet
    tweetId={`${Math.random()}`}
    renderError={_err => "Could not load tweet! ...Your custom component here"}
  />
);

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
