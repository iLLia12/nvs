export function SET_TASK_LISTS (state, data) {
  console.log("SET_TASK_LISTS")
  console.log(data)
  state.taskLists = data
}
export function PUSH_TASK_TO_LIST(state, data) {
  state.taskLists
    .forEach(element => {
      if (element.id === data.taskListId) {
        element.Tasks.push(data)
      }
    })
}
export function SET_TODO (state, tasks) {
  console.log("SET_TODO")
  console.log(tasks)
  state.taskLists = tasks
}
export function SET_FINISHED (state, tasks) {
  console.log("SET_FINISHED")
  console.log(tasks)
  state.taskLists = tasks
}