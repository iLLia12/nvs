export const taskLists = (state) => {
  console.log("GETTER taskLists")
  console.log(state)
  return state.taskLists
}
export const getTaskListById = (state) => (id) =>{
  console.log("GETTER taskLists")
  console.log(state)
  return state.taskLists.find(element => element.id === id)
}
