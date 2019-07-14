import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { setTitle } from "@/utils/util";
Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);
  next();
});
export default router;
