// import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
// import TestUtils from "react-dom/test-utils";

import {
  // Follow,
  // Hashtag,
  // Mention,
  // Share,
  // Timeline,
  Tweet,
} from "src/";

describe("Tweet", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
    document.body.appendChild(node); // required for twitter library
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("loads tweet widget", () => {
    render(<Tweet tweetId="841418541026877441" />, node, () => {
      // ...
    });
  });
});
