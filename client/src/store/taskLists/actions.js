import { getTaskLists, storeTask, deleteTask, getTaskListById } from 'src/services/taskLists'
import { handleError } from "../../services/helpers"
import { Notify, QSlideItem } from 'quasar'

export function fetchTaskLists ({ commit }) {
  getTaskLists()
    .then(res => res.data)
    .then(data => {
      commit('SET_TASK_LISTS', data)
    })
}
export async function storeTaskAction ({ commit }, task) {
  await storeTask(task)
    .then(res => res.data)
    .then(task => commit('PUSH_TASK_TO_LIST', task))
    .then(res => Notify.create({ message: 'Created', type: 'positive', position: 'top' }))
    .catch(error => handleError(error))
}
export async function deleteTaskAction ({ commit }, {id, taskListId}) {
  await deleteTask(id, taskListId)
    .then(res => res.data)
    .then(tasks => {
      let filteredTasks = tasks.filter(item => item.id !== id)
       commit('SET_TODO', filteredTasks.filter(item => !item.isFinished))
       commit('SET_FINISHED', filteredTasks.filter(item => item.isFinished))
      Notify.create({ message: "Deleted", type: 'positive', position: 'top' })
    })
    .catch(error => handleError(error))
}
