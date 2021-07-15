export function SET_TASK_LISTS (state, data) {
  console.log("SET_TASK_LISTS")
  console.log(data)
  state.taskLists = data
}