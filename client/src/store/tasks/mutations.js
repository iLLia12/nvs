

export function SET_TODO (state, tasks) {
  console.log("SET_TODO")
  console.log(tasks)
  state.taskListTodo = tasks
}

export function SET_FINISHED (state, tasks) {
  console.log("SET_FINISHED")
  console.log(tasks)
  state.taskListFinished = tasks
}

export function TOGGLE_TASK_DONE (state, task) {
  console.log("TOGGLE_TASK_DONE")
  console.log(task)
  //state.tasks = tasks
}
