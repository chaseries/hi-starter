
const _checkArgs = function(arg) {

  const errInitType = "The `set` object must be initialized with a single array.";

  if (!arguments.length || arguments.length > 1) {
    throw new Error(errInitType);
  }

  if (!(arg.constructor === Array)) {
    throw new Error(errInitType);
  }
};

export const add = function(set, i) {
  _checkArgs(set);

  if (set.indexOf(i) != -1) {
    return set;
  }

  return set.concat([i]);
};

export const remove = function(set, i) {
  _checkArgs(set);

  return set.filter(x => x != i);
};

export const size = function(set) {
  _checkArgs(set);

  return set.length;
};

