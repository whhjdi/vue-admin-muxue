import MyLayout from "@/layout/MyLayout";
export const routesMap = [
  {
    path: "/",
    name: "Page",
    redirect: "Home",
    component: MyLayout,
    meta: {
      title: "首页",
      icon: "md-home"
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
        meta: {
          title: "首页",
          icon: "md-ionitron",
          closable: false
        }
      }
    ]
  },
  {
    path: "/components",
    name: "Components",
    component: MyLayout,
    meta: {
      title: "组件",
      icon: "md-ionitron"
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () =>
          import(/* webpackChunkName: "Table" */ "../views/TablePage.vue"),
        meta: {
          title: "表格",
          icon: "ios-barcode",
          closable: true
        }
      },
      {
        path: "tree",
        name: "Tree",
        component: () =>
          import(/* webpackChunkName: "Tree" */ "../views/TreePage.vue"),
        meta: {
          title: "树",
          icon: "ios-game-controller-a",
          closable: true
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
          title: "split-pane",
          icon: "ios-heart",
          closable: true
        }
      },
      {
        path: "/menu-page",
        name: "MenuPage",
        component: () =>
          import(/* webpackChunkName: "MenuPage" */ "../views/MenuPage.vue"),
        meta: {
          title: "菜单组件",
          icon: "md-grid",
          closable: true
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
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "关于"
    }
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: "404"
    }
  }
];
