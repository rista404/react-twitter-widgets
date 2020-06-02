import React, { useState } from "react";
import { Timeline } from "../src";

export default {
  title: "Misc"
};

export const QuickUpdatesTest = () => {
  const [height, setHeight] = useState(400);

  return (
    <>
      <p>
        react-twitter-widgets protects against race conditions with many
        successive prop updates. Drag the slider to send many successive updates
        to timeline height.
      </p>
      <p>
        <input
          type="range"
          min="200"
          max="800"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        &nbsp;
        {height}px
      </p>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "reactjs" }}
        options={{ width: "400", height: `${height}` }}
      />
    </>
  );
};
