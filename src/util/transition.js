import { Maybe } from "monet";


const _transTypes = {
  init: "init",
  fallback: "fallback"
};

export const isTransType = function(k) {
  if (k in _transTypes) { return true; }
  else { return false; }
};

// An interface to enforce common transition types
export const getTransType = function(k) {
  if (k in _transTypes) {
    return Maybe.Just(_transTypes[k]);
  } else {
    return Maybe.Nothing();
  }
};
