<template>
  <div id="app">
    <div>
      <h4>Todos</h4>
      <ul>
        <li v-for="(todo,index) in todos" :key="index">
          <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)"/>
          {{ todo.text }}
        </li>
      </ul>
      <h4>Dones</h4>
      <ul>
        <li v-for="(done,index) in dones" :key="index">
          <input type="checkbox" :checked="done.checked" @change="toggleTodo(done)"/>
          {{ done.text }}
        </li>
      </ul>

      <p>Add todo: <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)"></p>
      <p>Add Async: <input type="text" v-model="id" @keyup.enter="addTodoAsync(id)"></p>
    </div>
    <hr>
    <div @click="increment">
      Clicked: {{ count }} times
      <button>+</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import Component from 'vue-class-component'
  import { State, Getter, Mutation, Action, namespace } from "vuex-class"
  import { Todo } from "../../store/types"



  const CounterGetter = namespace('counter', Getter)
  const CounterMutation = namespace('counter', Mutation)

  const TodoGetter = namespace('todos', Getter)
  const TodoMutation = namespace('todos', Mutation)
  const TodoAction = namespace('todos', Action)


  @Component
  export default class App extends Vue {
    @CounterGetter count!: string
    @CounterMutation increment

    @TodoGetter todos!: Todo[]
    @TodoGetter dones!: Todo[]
    @TodoMutation addTodo
    @TodoMutation toggleTodo
    @TodoAction addTodoAsync

    newTodo: Todo = {
      text: '',
      checked: false
    }

    id:string = ""

  }
</script>

<style lang="scss" rel="stylesheet/scss">
  html, body {
    font-family: Helvetica;
    font-size: 20px;
  }
  input, button {
    font-size: 20px;
  }

  input[type="checkbox"] {
    appearance: checkbox;
  }
</style>
