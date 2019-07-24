import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
import { setTitle, getToken } from "@/utils/util";
import store from "@/store";
Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);
  //token
  const token = getToken();
  if (token) {
    if (!store.state.router.hasRules) {
      store.dispatch("handleAuthorization").then(rules => {
        store.dispatch("concatRoutes", rules).then(newRoutes => {
          router.addRoutes(newRoutes);
          console.log({ ...to });

          next({ ...to, replace: true });
        });
      });
    } else {
      next();
    }
  } else {
    if (to.name === "Login") next();
    else next({ name: "Login" });
  }
});
export default router;
