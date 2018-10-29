import { GetterTree, MutationTree, ActionTree, Module } from "vuex";
import { RootState, TodoState, Todo } from "./types";
import axios from "axios";

export const state: TodoState = {
  todos: [
    {
      text: "Buy milk",
      checked: true
    },
    {
      text: "Go shopping",
      checked: false
    },
    {
      text: "Get haircut",
      checked: false
    }
  ]
};

const getters: GetterTree<TodoState, RootState> = {
  todos: (state: TodoState) =>
    state.todos.filter((todo: Todo) => !todo.checked),
  dones: (state: TodoState) => state.todos.filter((todo: Todo) => todo.checked)
};

const mutations: MutationTree<TodoState> = {
  addTodo(state: TodoState, todo: Todo) {
    const todoCopy = Object.assign({}, todo);
    state.todos.push(todoCopy);
    todo.text = "";
  },
  toggleTodo(state: TodoState, todo: Todo) {
    todo.checked = !todo.checked;
  }
};

const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync({ commit, dispatch, rootState }, id) {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts/" + id
    }).then(
      response => {
        const todo: Todo = {
          checked: false,
          text: response.data.title
        };
        commit("addTodo", todo);
      },
      error => {
        console.log(error);
      }
    );
  }
};

export const todos: Module<TodoState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
