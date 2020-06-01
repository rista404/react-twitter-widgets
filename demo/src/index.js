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
  constructor(props) {
    super(props);
    this.state = {
      height: 400,
    };
  }

  setHeight = (height) => {
    this.setState({ height });
  };

  render() {
    return (
      <div>
        <h1>Timeline Demo</h1>

        <input
          type="range"
          min="200"
          max="800"
          value={this.state.height}
          onChange={(event) => this.setHeight(event.target.value)}
        />

        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "TwitterDev",
          }}
          options={{
            username: "TwitterDev",
            height: this.state.height,
          }}
          onLoad={() => console.log("Timeline is loaded!")}
        />
        {/* {Object.entries(widgetPropExamples).map(
          ([name, { component, props }]) => (
            <div key={name}>
              <h2 style={{ textTransform: "capitalize" }}>{name}</h2>
              {React.createElement(component, props)}
            </div>
          )
        )} */}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
