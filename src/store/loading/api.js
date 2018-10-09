import { imagePromise } from "SRC/util/loading";


export const config = {
  "/": [
    "https://go.nasa.gov/2E57Tle"
  ],
  "/about": [
    "https://go.nasa.gov/2Csbfgh"
  ]
};

export const fetchCriticalImages = function (url) {
  if (config[url]) {
    return config[url].map(imagePromise);
  }
};
