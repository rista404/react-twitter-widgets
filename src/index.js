import React, { useRef, useEffect } from "react";
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

  // Make deps for useEffect. options, and possibly primaryArg must be compared deep.
  // NOTE onLoad is used in useCallback, but it is not listed as a dependency.
  // Listing it would likely cause unnecessary loads. The latest onLoad should be
  // used regardless, since it will not be called unless the other dependencies
  // change, so it works out.
  const deps = useDeepCompareMemoize([
    factoryFunctionName,
    primaryArg,
    options,
  ]);

  useEffect(() => {
    // Protect against race conditions
    // (set to true in cleanup function;
    // checked if canceled in async loadWidget)
    let isCanceled = false;

    if (ref.current) {
      removeChildren(ref.current);

      async function loadWidget() {
        if (!ref || !ref.current) {
          return;
        }
        const childEl = document.createElement("div");
        ref.current.appendChild(childEl);

        try {
          const twttr = await twApi();

          // primaryArg (possibly an object) and options must be cloned deep
          // since twitter mutates them (gah!)
          await twttr.widgets[factoryFunctionName](
            cloneDeep(primaryArg),
            childEl,
            cloneDeep(options)
          );
        } catch (e) {
          console.error(e);
          return;
        }

        if (!ref || !ref.current) {
          return;
        }

        if (isCanceled) {
          if (childEl) {
            childEl.remove();
          }
          return;
        }

        if (onLoad) {
          onLoad();
        }
      }

      loadWidget();
    }

    return () => {
      isCanceled = true;
    };
  }, deps);

  return { ref };
}

export function Follow({ username, options, onLoad }) {
  const { ref } = useTwitterWidget(
    "createFollowButton",
    username,
    options,
    onLoad
  );
  return <div ref={ref} />;
}

export function Hashtag({ hashtag, options, onLoad }) {
  const { ref } = useTwitterWidget(
    "createHashtagButton",
    hashtag,
    options,
    onLoad
  );
  return <div ref={ref} />;
}

export function Mention({ username, options, onLoad }) {
  const { ref } = useTwitterWidget(
    "createMentionButton",
    username,
    options,
    onLoad
  );
  return <div ref={ref} />;
}

export function Share({ url, options, onLoad }) {
  const { ref } = useTwitterWidget("createShareButton", url, options, onLoad);
  return <div ref={ref} />;
}

export function Timeline({ dataSource, options, onLoad }) {
  const { ref } = useTwitterWidget(
    "createTimeline",
    dataSource,
    options,
    onLoad
  );
  return <div ref={ref} />;
}

export function Tweet({ tweetId, options, onLoad }) {
  const { ref } = useTwitterWidget("createTweet", tweetId, options, onLoad);
  return <div ref={ref} />;
}
