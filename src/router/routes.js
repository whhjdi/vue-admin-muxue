import MyLayout from "@/layout/MyLayout";
const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: MyLayout,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/split-pane",
    name: "SplitPane",
    component: () =>
      import(/* webpackChunkName: "SplitPane" */ "../views/SplitPanePage.vue"),
    meta: {
      title: "SplitPane"
    }
  },
  {
    path: "/menu-page",
    name: "MenuPage",
    component: () =>
      import(/* webpackChunkName: "MenuPage" */ "../views/MenuPage.vue"),
    meta: {
      title: "MenuPage"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "关于"
    }
  }
];

export default routes;
