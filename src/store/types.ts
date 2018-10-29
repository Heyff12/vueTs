// Store
export interface RootState {
  todos: TodoState
  count: number
}


export interface TodoState {
  todos: Todo[]
}

export interface CounterState {
  count: number
}

// Models
export interface Todo {
  text: string
  checked: boolean
}
