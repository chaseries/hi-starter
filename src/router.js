import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const PageIndex = () => import(
  /* webpackChunkName: "pageIndex" */
  "VUE_PAGE/Index.vue"
);

const PageAbout = () => import(
  /* webpackChunkName: "pageAbout" */
  "VUE_PAGE/about/Index.vue"
);

const PageWorks = () => import(
  /* webpackChunkName: "pageWorks" */
  "VUE_PAGE/works/Index.vue"
);

const PageDigest = () => import(
  /* webpackChunkName: "pageDigest " */
  "VUE_PAGE/digest/Index.vue"
);

const PageContact = () => import(
  /* webpackChunkName: "pageContact" */
  "VUE_PAGE/contact/Index.vue"
);

const RouteIndex = {
  path: "/",
  component: PageIndex,
  meta: { title: "Home" }
};

const RouteWorks = {
  path: "/works",
  component: PageWorks,
  meta: { title: "Works" }
};

const RouteAbout = {
  path: "/about",
  component: PageAbout,
  meta: { title: "About" }
};

const RouteDigest = {
  path: "/digest",
  component: PageDigest,
  meta: { title: "Digest" }
};

const RouteContact = {
  path: "/contact",
  component: PageContact,
  meta: { title: "Contact" }
};

const routes = [
  RouteIndex,
  RouteWorks,
  RouteAbout,
  RouteDigest,
  RouteContact
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
