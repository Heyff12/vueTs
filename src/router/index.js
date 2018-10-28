import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Test from '@/pages/test'
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