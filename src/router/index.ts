import Vue, { AsyncComponent } from "vue";
import Router, { RouteConfig, Route, NavigationGuard } from "vue-router";

const HelloWorld: AsyncComponent = (): any =>
  import("@/components/HelloWorld.vue");
const Test: AsyncComponent = (): any => import("@/pages/test/index.vue");
Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  }
];

const router: Router = new Router({
  base: "/",
  routes
});

export default router;
