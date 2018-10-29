// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "lib-flexible";
const FastClick = require("fastclick") //解决300ms延迟
import './router/class-component-hooks'

import { Button, Cell, Spinner } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Spinner.name, Spinner);

Vue.config.productionTip = false;
window["FastClick"] = FastClick;
//window.FastClick = FastClick;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
