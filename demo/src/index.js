import React, { Component, useState } from "react";
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
        height: "600",
      },
    },
  },
  timeline_bad: {
    component: Timeline,
    props: {
      dataSource: {
        sourceType: "profile",
        screenName:
          "NONEXISTING_jffjfjfjjfj9jpajsj9fj9fajlajll9393939amnnma9a9jajpajfjjfjfj",
      },
      options: {
        height: "600",
      },
      renderError: (_err) => <p>Could not load timeline.</p>,
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

function TestTimelineScreenName() {
  const [getScreenNameOk, setScreenNameOk] = useState(true);
  return (
    <>
      <h2>Test Timeline Screen Name</h2>
      <button onClick={() => setScreenNameOk(!getScreenNameOk)}>
        Toggle OK
      </button>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: getScreenNameOk
            ? "TwitterDev"
            : "NONEXISTING_jffjfjfjjfj9jpajsj9fj9fajlajll9393939amnnma9a9jajpajfjjfjfj",
        }}
        options={{
          height: "400",
        }}
        renderError={(_err) => <p>Could not load timeline</p>}
      />
    </>
  );
}

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
        <TestTimelineScreenName />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
