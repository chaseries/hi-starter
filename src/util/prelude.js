
export const repeat = function(val, n) {
  if (n === 0) { return []; }
  return [val].concat(repeat(val, n - 1));
};

export const repeatCall = function(f, n) {
  if (n === 0) { return []; }
  return [f()].concat(repeatCall(f, n - 1));
};

export const zipToObject = function(ks, vs) {
  if ((ks.length === 0 ) || (vs.length === 0)) { return {}; }
  return { [ks[0]]: vs[0], ...zipToObject(ks.slice(1), vs.slice(1)) };
};
