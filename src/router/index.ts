import Vue, { AsyncComponent } from "vue";
import Router, { RouteConfig, Route, NavigationGuard } from "vue-router";

const HelloWorld: AsyncComponent = (): any =>
  import("@/components/HelloWorld.vue");
const Test: AsyncComponent = (): any => import("@/pages/test/index.vue");
const Test1:AsyncComponent = ():any => import("@/pages/test1/index.vue");
const Todo:AsyncComponent = ():any => import("@/pages/todo/Todos.vue");

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
  },
  {
    path: "/test1",
    name: "Test1",
    component: Test1
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  },
];

const router: Router = new Router({
  base: "/",
  routes
});

export default router;
