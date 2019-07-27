import MyLayout from "@/layout/MyLayout";
export const routesMap = [
  {
    path: "/",
    redirect: "home",
    component: MyLayout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
        meta: {
          title: "首页",
          icon: "md-home",
          closable: false
        }
      },
      {
        path: "/components",
        name: "Components",
        component: { render: h => h("router-view") },
        meta: {
          title: "组件",
          icon: "ios-medal"
        },
        children: [
          {
            path: "table",
            name: "Table",
            component: () =>
              import(/* webpackChunkName: "Table" */ "../views/TablePage.vue"),
            meta: {
              title: "表格组件",
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
              title: "树形组件",
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
              title: "分割窗口",
              icon: "ios-heart",
              closable: true
            }
          },
          {
            path: "menu-page",
            name: "MenuPage",
            component: () =>
              import(
                /* webpackChunkName: "MenuPage" */ "../views/MenuPage.vue"
              ),
            meta: {
              title: "菜单组件",
              icon: "md-grid",
              closable: true
            }
          }
        ]
      },
      {
        path: "/zui",
        name: "Zui",
        component: { render: h => h("router-view") },
        meta: {
          title: "ZUI",
          icon: "md-color-palette",
          closable: true
        },
        children: [
          {
            path: "ZButton",
            name: "ZButton",
            component: () =>
              import(
                /* webpackChunkName: "ZButton" */ "../views/ButtonPage.vue"
              ),
            meta: {
              title: "按钮",
              icon: "ios-radio-button-on",
              closable: true
            }
          },
          {
            path: "ZInput",
            name: "ZInput",
            component: () =>
              import(/* webpackChunkName: "ZInput" */ "../views/InputPage.vue"),
            meta: {
              title: "输入框",
              icon: "md-link",
              closable: true
            }
          },
          {
            path: "ZTabs",
            name: "ZTabs",
            component: () =>
              import(/* webpackChunkName: "ZTabs" */ "../views/ZTabsPage.vue"),
            meta: {
              title: "tab导航",
              icon: "ios-book",
              closable: true
            }
          }
        ]
      },
      {
        path: "/other",
        name: "Other",
        component: { render: h => h("router-view") },
        meta: {
          title: "其他",
          icon: "md-bug",
          closable: true
        },
        children: [
          {
            path: "/test",
            name: "Test",
            component: { render: h => h("router-view") },
            meta: {
              title: "测试",
              icon: "ios-build",
              closable: true
            },
            children: [
              {
                path: "/test1",
                name: "Test1",
                component: {
                  render: h => h("div", "递归组件测试1")
                },
                meta: {
                  title: "测试1",
                  icon: "ios-bulb-outline",
                  closable: true
                }
              },
              {
                path: "/test2",
                name: "Test2",
                component: {
                  render: h => h("div", "递归组件测试2")
                },
                meta: {
                  title: "测试2",
                  icon: "ios-bulb",
                  closable: true
                }
              }
            ]
          }
        ]
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
