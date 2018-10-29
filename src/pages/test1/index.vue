<template>
  <div>
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import {MyMixin} from './mixin'
 
@Component
export default class Test1 extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}

</script>
