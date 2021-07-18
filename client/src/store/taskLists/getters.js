export const taskLists = (state) => {
  return state.taskLists
}
export const getTaskListById = (state) => (id) =>{
  return state.taskLists.find(element => element.id === id)
}
