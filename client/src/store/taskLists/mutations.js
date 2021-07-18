export function SET_TASK_LISTS (state, data) {
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
  state.taskLists = tasks
}
export function SET_FINISHED (state, tasks) {
  state.taskLists = tasks
}