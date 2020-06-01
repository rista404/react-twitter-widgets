import React, { useRef, useCallback } from "react";
import {
  canUseDOM,
  twLoad,
  twApi,
  useDeepCompareMemoize,
  removeChildren,
} from "./utils";
import cloneDeep from "lodash.clonedeep";

if (canUseDOM) {
  twLoad();
}

function useTwitterWidget(factoryFunctionName, primaryArg, options, onLoad) {
  // noop if ssr
  if (!canUseDOM) {
    return;
  }

  const ref = useRef(null);

  // Make deps for useCallback
  // NOTE onLoad is used in useCallback, but it is not listed as a dependency.
  // Listing it would likely cause unnecessary loads. The latest onLoad should be
  // used regardless, since it will not be called unless the other dependencies
  // change, so it works out.
  const deps = useDeepCompareMemoize([
    factoryFunctionName,
    primaryArg,
    options,
  ]);

  const setRef = useCallback((node) => {
    if (ref.current) {
      removeChildren(ref.current);
    }

    if (node) {
      async function loadWidget() {
        try {
          const twttr = await twApi();

          // primaryArg (possibly an object) and options must be cloned deep
          // since twitter mutates them (gah!)
          await twttr.widgets[factoryFunctionName](
            cloneDeep(primaryArg),
            node,
            cloneDeep(options)
          );
        } catch (e) {
          console.error(e);
          return;
        }

        if (onLoad) {
          onLoad();
        }
      }

      loadWidget();
    }

    ref.current = node;
  }, deps);

  return { ref, setRef };
}

export function Follow({ username, options, onLoad }) {
  const { setRef } = useTwitterWidget(
    "createFollowButton",
    username,
    options,
    onLoad
  );
  return <div ref={setRef} />;
}

export function Hashtag({ hashtag, options, onLoad }) {
  const { setRef } = useTwitterWidget(
    "createHashtagButton",
    hashtag,
    options,
    onLoad
  );
  return <div ref={setRef} />;
}

export function Mention({ username, options, onLoad }) {
  const { setRef } = useTwitterWidget(
    "createMentionButton",
    username,
    options,
    onLoad
  );
  return <div ref={setRef} />;
}

export function Share({ url, options, onLoad }) {
  const { setRef } = useTwitterWidget(
    "createShareButton",
    url,
    options,
    onLoad
  );
  return <div ref={setRef} />;
}

export function Timeline({ dataSource, options, onLoad }) {
  const { setRef } = useTwitterWidget(
    "createTimeline",
    dataSource,
    options,
    onLoad
  );
  return <div ref={setRef} />;
}

export function Tweet({ tweetId, options, onLoad }) {
  const { setRef } = useTwitterWidget("createTweet", tweetId, options, onLoad);
  return <div ref={setRef} />;
}
