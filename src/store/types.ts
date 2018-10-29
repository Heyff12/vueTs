// Store
export interface RootState {
  route:any
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
