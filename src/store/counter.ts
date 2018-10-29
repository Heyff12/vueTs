import { GetterTree, MutationTree, ActionTree, Module } from "vuex"
import { RootState, CounterState } from './types'

export const state: CounterState = {
  count: 0
}

const getters: GetterTree<CounterState, RootState> = {
  count: state => state.count
}

const mutations: MutationTree<CounterState> = {
  increment (state) {
    state.count += 1
  }
}

const actions: ActionTree<CounterState, RootState> = {
  increment ({ commit }) {
    commit('increment')
  }
}

export const counter: Module<CounterState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
