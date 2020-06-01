import loadjs from "loadjs";
import { useRef } from "react";
import isEqual from "lodash.isequal";

const twScriptUrl = "https://platform.twitter.com/widgets.js";
const twScriptWindowFieldName = "twttr";
const twScriptName = twScriptWindowFieldName;

export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export function twLoad() {
  loadjs(twScriptUrl, twScriptName);
}

export function twApi() {
  return new Promise((resolve, reject) => {
    const rejectWithError = () =>
      reject(new Error("Could not load remote twitter widgets js"));
    loadjs.ready(twScriptName, {
      success: () => {
        // Ensure loaded
        const twttr = window[twScriptWindowFieldName];
        if (!twttr) {
          rejectWithError();
        }
        resolve(twttr);
      },
      error: rejectWithError,
    });
  });
}

export function removeChildren(node) {
  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
}

export function useDeepCompareMemoize(value) {
  const ref = useRef();
  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
