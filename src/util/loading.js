// Image progress library
//

export const imagePromise = (src, tag) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ img, tag, status: "ok" });
    img.onerror = () => resolve({ img, tag, status: "fail" });
    img.src = src;
  });
};
