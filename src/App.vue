<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul class="menu">
      <li><router-link :to="{ name: 'HelloWorld'}">Home</router-link></li>
      <li><router-link :to="{ name: 'Test'}">Test</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {}

// export default {
//   name: 'App'
// }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~style/mint-ui";
  @import "~style/app";
</style>
