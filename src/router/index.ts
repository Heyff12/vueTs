import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld.vue'
//import Test from '@/pages/test'
const HelloWorld = () => import("@/components/HelloWorld.vue");
const Test = () => import("@/pages/test/index.vue");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ]
})
