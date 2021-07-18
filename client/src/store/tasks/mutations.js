export function SET_TODO (state, tasks) {
  state.taskListTodo = tasks
}

export function SET_FINISHED (state, tasks) {
  state.taskListFinished = tasks
}

export function TOGGLE_TASK_DONE (state, task) {
  state.tasks = tasks
}
