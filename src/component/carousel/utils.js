//import { store } from "SRC/app-built-for-client";
import tween from "@tweenjs/tween.js";
import BezierEasing from "bezier-easing";

export const easingFunction1 = BezierEasing(0.90, 0.1, 0.90, 0.5);
export const easingFunction2 = BezierEasing(0.50, 0.0, 0.70, 0.0);
export const easingFunction3 = BezierEasing(0.60, 0.0, 0.40, 1.0);
export const easingFunction4 = BezierEasing(0.55, 0.0, 0.55, 1.0);
export const easingFunction5 = BezierEasing(0.75, 0.0, 0.75, 1.0);

export const pauseCarousel = function pauseCarousel () {
  store.commit("togglePause");
};

/* Positioning */

export const getCenterPos = function getCenterPos () {
  const paper = require("paper");
  return new paper.Point(paper.view.size.width / 2, paper.view.size.height / 2);
};

export const getItemOffscreenLeftPos = function getItemOffscreenLeftPos (item) {
  const paper = require("paper");
  const itemWidth = item.bounds.topRight.x - item.bounds.topLeft.x;
  const offscreenX = -(paper.view.size.width + itemWidth / 2);
  return new paper.Point(offscreenX, item.position.y);
};

export const getItemOffscreenRightPos = function getItemOffscreenRightPos (item) {
  const paper = require("paper");
  const itemWidth = item.bounds.topRight.x - item.bounds.topLeft.x;
  const offscreenX = paper.view.size.width + itemWidth / 2;
  return new paper.Point(offscreenX, item.position.y);
};

/* Drawing */

export const drawFullscreenParallelogram = function drawFullscreenParallelogram() {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const p1 = new paper.Point(0, 0);
  const p2 = new paper.Point(paper.view.size.width, paper.view.size.height);
  return utils.Parallelogram(p1, p2, 75);
};

export const drawCoverParallelogram = function drawCoverParallelogram () {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const cover = drawFullscreenParallelogram(paper, utils);
  cover.fillColor = "white";
  return cover;
};

export const animateWhiteCoverParallelogram = function animateWhiteCoverParallelogram (dir, dur, del, ease, cb) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const cover = drawCoverParallelogram(paper, utils);
  const posStart = (() => {
    if (dir === "lr") {
      return getCenterPos(paper);
    } else if (dir === "rl") {
      return getItemOffscreenRightPos(cover);
    } else {
      throw new Error("Direction may only be 'lr' or 'rl'.");
    }
  })();
  const posEnd = (() => {
    if (dir === "lr") {
      return getItemOffscreenRightPos(cover);
    } else if (dir === "rl") {
      return getCenterPos(paper);
    } else {
      throw new Error("Direction may only be 'in' or 'out'.");
    }
  })();
  cover.position = posStart;
  const tweenGroup = new tween.Group();
  const tween_ = new tween.Tween({ x: posStart.x }, tweenGroup)
    .to({x: posEnd.x}, dur)
    .easing(ease)
    .onUpdate((o) => {
      cover.position = new paper.Point(o.x, cover.position.y);
    })
    .onComplete(() => {
      if (typeof cb != "undefined") {
        cb();
      }
    })
    .delay(del)
    .start();
  const animate = () => {
    requestAnimationFrame(animate);
    tweenGroup.update();
  };
  animate();
};

export const animateRevealParallelogramIn = function animateRevealParallelogramIn (cb) {
  animateWhiteCoverParallelogram("lr", 800, 0, easingFunction1, cb);
};

export const animateRevealParallelogramOut = function animateRevealParallelogramOut (cb) {
  animateWhiteCoverParallelogram("rl", 800, 100, easingFunction2, cb);
};

export const animatePostLoadBackground = function animatePostLoadBackground (imgBg, scale, delay) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const maskP1 = new paper.Point(0, 0);
  const maskP2 = new paper.Point(paper.view.size.width, paper.view.size.height);
  const mask = utils.Parallelogram(maskP1, maskP2, 75);
  const bg = utils.createCover(paper.view, imgBg);
  const group = new paper.Group([mask, bg]);
  const pos = getCenterPos(paper);
  const posOffscreen = getItemOffscreenRightPos(mask);
  const tweenGroup = new tween.Group();
  bg.scale(scale);
  group.clipped = true;

  const tween_ = new tween.Tween({x: pos.x}, tweenGroup)
    .to({x: posOffscreen.x}, 800)
    .easing(easingFunction2)
    .delay(delay)
    .onUpdate((o) => {
      mask.position = new paper.Point(o.x, mask.position.y);
    })
    .start();

  const _animate = () => {
    requestAnimationFrame(_animate);
    tweenGroup.update();
  };

  _animate();
};

export const animateGlassPane = function animateGlassPane (imgBg, scale, dir, dur, del, easingFunction, cb) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const maskP1 = new paper.Point(0, 0);
  const maskP2 = new paper.Point(paper.view.size.width, paper.view.size.height);
  const mask = utils.Parallelogram(maskP1, maskP2, 75);
  const bg = utils.createCover(paper.view, imgBg);
  const group = new paper.Group([mask, bg]);
  bg.scale(scale);
  group.clipped = true;
  const posStart = getCenterPos(paper);
  const posEnd = (() => {
    if (dir === "lr") {
      return getItemOffscreenRightPos(mask);
    } else if (dir === "rl") {
      return getItemOffscreenLeftPos(mask);
    } else {
      throw new Error("Direction may only be 'in' or 'out'.");
    }
  })();

  mask.position = posStart;
  const tweenGroup = new tween.Group();
  const tween_ = new tween.Tween({ x: posStart.x }, tweenGroup)
    .to({x: posEnd.x}, dur)
    .easing(easingFunction)
    .delay(del)
    .onUpdate((o) => {
      mask.position = new paper.Point(o.x, mask.position.y);
    })
    .onComplete(() => {
      group.remove();
      mask.remove();
      bg.remove();
      if (typeof cb != "undefined") { cb(); };
    })
    .start();

  const animate = () => {
    requestAnimationFrame(animate);
    tweenGroup.update();
  };

  animate();
};

const animateGlassPanesIn = function animateGlassPanesIn (imgBg) {
  animateGlassPane(imgBg, 1.20, "lr", 800, 250, easingFunction2);
  animateGlassPane(imgBg, 1.40, "lr", 800, 200, easingFunction2);
};

const animateGlassPanesOut = function animateGlassPanesOut (imgBg) {
  animateGlassPane(imgBg, 1.20, "rl", 800, 0, easingFunction1);
  animateGlassPane(imgBg, 1.40, "rl", 800, 50, easingFunction1);
};


export const animateIntro = function animateIntro (imgBg) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  utils.createCover(paper.view, imgBg);
  animateGlassPane(imgBg, 1.20, "lr", 800, 250, easingFunction2);
  animateRevealParallelogramIn();
};

export const animTransF = function animTransF (idxCur, idxPrev) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const bgUrlCur = store.getters.itemCur.cachedImg;
  const bgUrlPrev = store.state.moduleCarousel.items[idxPrev].cachedImg;

  store.commit("lock");

  const cb = function cb () {
    store.commit("unlock");
  };

  animateGlassPane(bgUrlCur, 1.4, "lr", 800, 400, easingFunction3, cb);
  animateGlassPane(bgUrlPrev, 1.4, "lr", 800, 200, easingFunction3);
  animateGlassPane(bgUrlPrev, 1, "lr", 800, 0, easingFunction3);
};

export const animTransB = function animTransB (idxCur, idxPrev) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  const bgUrlCur = store.getters.itemCur.cachedImg;
  const bgUrlPrev = store.state.moduleCarousel.items[idxPrev].cachedImg;

  store.commit("lock");

  const cb = function cb () {
    store.commit("unlock");
  };

  animateGlassPane(bgUrlCur, 1.4, "rl", 800, 400, easingFunction3, cb);
  animateGlassPane(bgUrlPrev, 1.4, "rl", 800, 200, easingFunction3);
  animateGlassPane(bgUrlPrev, 1, "rl", 800, 0, easingFunction3);
};

export const animateTransition = function animateTransition (idxCur, idxPrev) {
  const paper = require("paper");
  //const utils = require("SRC/utils/paper-utils");
  //this.purgeMorgue();
  const staticBg = utils.createCover(paper.view, store.getters.cachedImgBgCur);
  //this.addToMorgue(staticBg);

  if ((idxCur === 0) && (idxPrev === 2)) { // Going forward
    animTransF(idxCur, idxPrev);
  } else if ((idxCur === 2) && (idxPrev === 0)) {
    animTransB(idxCur, idxPrev);
  } else if (idxCur > idxPrev) {
    animTransF(idxCur, idxPrev);
  } else {
    animTransB(idxCur, idxPrev);
  }
};

