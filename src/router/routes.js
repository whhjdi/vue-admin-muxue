import MyLayout from "@/layout/MyLayout";
export const routesMap = [
  {
    path: "/home",
    name: "Home",
    component: MyLayout,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/components",
    name: "Components",
    component: MyLayout,
    children: [
      {
        path: "access_admin",
        name: "Access",
        component: () =>
          import(
            /* webpackChunkName: "Access" */ "@/components/HelloWorld.vue"
          ),
        meta: {
          title: "Access",
          access: ["admin"]
        }
      },
      {
        path: "table",
        name: "Table",
        component: () =>
          import(/* webpackChunkName: "Table" */ "../views/TablePage.vue"),
        meta: {
          title: "Table"
        }
      },
      {
        path: "tree",
        name: "Tree",
        component: () =>
          import(/* webpackChunkName: "Tree" */ "../views/TreePage.vue"),
        meta: {
          title: "Tree"
        }
      },
      {
        path: "split-pane",
        name: "SplitPane",
        component: () =>
          import(
            /* webpackChunkName: "SplitPane" */ "../views/SplitPanePage.vue"
          ),
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
      }
    ]
  }
];

export const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: {
      title: "登录"
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
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: "404"
    }
  }
];
