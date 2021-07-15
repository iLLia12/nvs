import { getTaskLists} from 'src/services/taskLists'

export function fetchTaskLists ({ commit }) {
  getTaskLists()
    .then(res => res.data)
    .then(data => {
      commit('SET_TASK_LISTS', data)
    })
}