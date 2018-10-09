// Loading progress library


export const imagePromise = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ img, status: "ok" });
    img.onerror = () => resolve({ img, status: "fail" });
    img.src = src;
  });
};
