import React, { Component } from "react";
import { render } from "react-dom";

import { Follow, Hashtag, Mention, Share, Timeline, Tweet } from "../../src";

const widgetPropExamples = {
  follow: {
    component: Follow,
    props: {
      username: "reactjs",
    },
  },
  hashtag: {
    component: Hashtag,
    props: {
      hashtag: "reactjs",
    },
  },
  mention: {
    component: Mention,
    props: {
      username: "reactjs",
      options: {
        size: "large",
      },
    },
  },
  share: {
    component: Share,
    props: {
      url: "https://github.com/andrewsuzuki/react-twitter-widgets",
    },
  },
  timeline: {
    component: Timeline,
    props: {
      dataSource: {
        sourceType: "profile",
        screenName: "reactjs",
      },
      options: {
        username: "reactjs",
        height: "600",
      },
    },
  },
  tweet: {
    component: Tweet,
    props: {
      tweetId: "841418541026877441",
      options: {
        theme: "dark",
      },
    },
  },
};

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Demo react-twitter-widgets</h1>
        {Object.entries(widgetPropExamples).map(
          ([name, { component, props }]) => (
            <div key={name}>
              <h2 style={{ textTransform: "capitalize" }}>{name}</h2>
              {React.createElement(component, props)}
            </div>
          )
        )}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
