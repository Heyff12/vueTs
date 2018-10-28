<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button> -->
  </div>
</template>


<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";

// @Component
// export default class Test extends Vue {
//   // 初始化数据
//   msg = 123;

//   // 声明周期钩子
//   mounted() {
//     this.greet();
//   }

//   // 计算属性
//   get computedMsg() {
//     return "computed " + this.msg;
//   }

//   // 方法
//   greet() {
//     alert("greeting: " + this.msg);
//   }
// }

  export default {
  name: 'test',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
