import Vue from 'vue'
import Vuex, { StoreOptions } from "vuex"
import { todos } from "./todos"
import { counter } from "./counter"
import { RootState } from "./types"

Vue.use(Vuex)

// const store: StoreOptions<RootState> = new Vuex.Store<RootState>({
const store = new Vuex.Store<RootState>({
  modules: {
    todos,
    counter,
  }
})

export default store
