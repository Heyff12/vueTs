<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
    <h3>{{randomData}}</h3>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NoCache } from './decorators'


// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  // template: '<button @click="onClick">Click!</button>'
})
export default class Test extends Vue {
  // 初始化数据
  msg: number = 123;
  // 初始数据可以直接声明为实例的属性
  message: string = "Hello!";

  // 声明周期钩子
  mounted() {
   // this.greet();
  }

  // The class component now treats beforeRouteEnter
  // and beforeRouteLeave as Vue Router hooks
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    console.log(to)
    console.log(from)
    next() // needs to be called to confirm the navigation
  }
 
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    console.log(to)
    console.log(from)
    next() // needs to be called to confirm the navigation
  }


  // 计算属性
  get computedMsg() {
    return "computed " + this.msg;
  }

  @NoCache
  get randomData() {
    return Math.random()
  }


  // 方法
  greet() {
    alert("greeting: " + this.msg);
  }

  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    window.alert(this.message);
  }
}

// export default {
// name: 'test',
// data () {
//   return {
//     msg: 'test'
//   }
// }
//}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "./test";
</style>
